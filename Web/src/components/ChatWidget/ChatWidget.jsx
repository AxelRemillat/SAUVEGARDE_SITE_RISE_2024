import { useState, useRef, useEffect, useCallback } from 'react';
import './ChatWidget.css';

/* ──────────────────────────────────────────────────────────────────────────
   Widget chatbot RAG RISE — porté depuis le repo CHAT_BOT_RAG_RISE
   (frontend/src/pages/ChatPage.jsx + components). Self-contained : aucune
   dépendance ajoutée, appelle directement le backend FastAPI.

   Backend : configurer l'URL via VITE_API_URL au build (défaut localhost:8000).
   Endpoints utilisés : POST /chat  ({ question, session_id })
                        POST /feedback ({ log_id, vote })
   ────────────────────────────────────────────────────────────────────────── */

const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');

const WELCOME = {
  role: 'bot',
  text:
    "Bonjour 👋 Je suis l'assistant RISE. Posez-moi vos questions sur la mobilité " +
    'internationale : universités partenaires, témoignages, démarches, certifications…',
};

const SUGGESTIONS = [
  'Comment créer un compte RISE ?',
  'Quelles universités sont disponibles en Asie ?',
  'Quels sont les frais de scolarité supplémentaires ?',
  "Des témoignages d'étudiants partis au Japon ?",
  "Quel niveau d'anglais est requis pour partir ?",
  'Comment obtenir une certification RISE ?',
];

const COURTESY_RE = /\b(merci|thank(?:s| you)|au revoir|bye|à bientôt|bonne journée|ciao|adieu)\b/i;
const COURTESY_REPLIES = [
  "De rien ! N'hésitez pas si vous avez d'autres questions sur RISE. 😊",
  'Avec plaisir ! Bonne exploration de vos futures destinations. ✈️',
  "Je vous en prie ! Je reste là si besoin. 🙂",
  'À bientôt sur RISE ! 🌍',
];

const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
const PHONE_RE = /(?:\+33|0)\s?[1-9](?:[\s.-]?\d{2}){4}/;

function detectPII(text) {
  const types = [];
  if (EMAIL_RE.test(text)) types.push('email');
  if (PHONE_RE.test(text)) types.push('téléphone');
  return types;
}

function getSessionId() {
  try {
    let id = localStorage.getItem('rise_chat_session');
    if (!id) {
      id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `sess-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem('rise_chat_session', id);
    }
    return id;
  } catch {
    return `sess-${Date.now()}`;
  }
}

function sourceTitle(s) {
  const d = s.display || {};
  return d.question || d.name || d.student || s.chunk_id || 'Source';
}
function sourceSubtitle(s) {
  const d = s.display || {};
  if (d.city || d.country) return [d.city, d.country].filter(Boolean).join(', ');
  return d.category || '';
}

function SourceList({ sources }) {
  if (!sources || sources.length === 0) return null;
  return (
    <div className="rise-cw-sources">
      <div className="rise-cw-sources-title">Sources</div>
      {sources.slice(0, 3).map((s, i) => (
        <div className="rise-cw-source" key={s.chunk_id || i}>
          {s.type && <span className="rise-cw-source-type">{s.type}</span>}
          <div className="rise-cw-source-main">
            <div className="rise-cw-source-title">{sourceTitle(s)}</div>
            {sourceSubtitle(s) && <div className="rise-cw-source-sub">{sourceSubtitle(s)}</div>}
          </div>
          {typeof s.score === 'number' && (
            <span className="rise-cw-source-score">{Math.round(s.score * 100)}%</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Feedback({ logId }) {
  const [vote, setVote] = useState(null);

  const send = async (value) => {
    if (vote) return;
    setVote(value);
    try {
      await fetch(`${API_BASE}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ log_id: logId, vote: value }),
      });
    } catch {
      /* feedback best-effort : on n'interrompt pas l'UX en cas d'échec */
    }
  };

  if (vote) return <div className="rise-cw-feedback"><span className="rise-cw-fb-thanks">Merci pour votre retour 🙏</span></div>;
  return (
    <div className="rise-cw-feedback">
      <button className="rise-cw-fb-btn" onClick={() => send('up')} aria-label="Réponse utile">👍</button>
      <button className="rise-cw-fb-btn" onClick={() => send('down')} aria-label="Réponse non utile">👎</button>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(getSessionId());
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  const hasOnlyWelcome = messages.length === 1;

  // Auto-scroll vers le bas à chaque nouveau message
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, loading, open]);

  const send = useCallback(
    async (raw) => {
      const text = (raw ?? '').trim();
      if (!text || loading) return;

      setInput('');
      setMessages((m) => [...m, { role: 'user', text }]);

      // Politesse → réponse locale, pas d'appel API
      if (COURTESY_RE.test(text)) {
        const reply = COURTESY_REPLIES[Math.floor(Math.random() * COURTESY_REPLIES.length)];
        setMessages((m) => [...m, { role: 'bot', text: reply }]);
        return;
      }

      // Avertissement PII (on envoie quand même la question)
      const pii = detectPII(text);
      if (pii.length) {
        setMessages((m) => [
          ...m,
          {
            role: 'bot',
            warn: true,
            text: `⚠️ Évitez de partager des données personnelles (${pii.join(', ')}). Je ne les conserve pas, mais par sécurité ne les saisissez pas ici.`,
          },
        ]);
      }

      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: text, session_id: sessionId.current }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setMessages((m) => [
          ...m,
          {
            role: 'bot',
            text: data.answer || "Je n'ai pas de réponse pour le moment.",
            sources: data.sources,
            blocked: data.blocked,
            pii_warning: data.pii_warning,
            log_id: data.log_id,
          },
        ]);
      } catch {
        setMessages((m) => [
          ...m,
          {
            role: 'bot',
            warn: true,
            text:
              "Désolé, je n'arrive pas à joindre l'assistant pour le moment. " +
              'Réessayez dans un instant. 🙏',
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  const onInputChange = (e) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 110)}px`;
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const clearChat = () => {
    setMessages([WELCOME]);
    setInput('');
  };

  return (
    <div className="rise-cw-root">
      {!open && (
        <button
          className="rise-cw-launcher"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l'assistant RISE"
          title="Une question ? Discutez avec l'assistant RISE"
        >
          💬
          <span className="rise-cw-launcher-badge">IA</span>
        </button>
      )}

      {open && (
        <div className="rise-cw-panel" role="dialog" aria-label="Assistant RISE">
          <div className="rise-cw-header">
            <div className="rise-cw-avatar">🌍</div>
            <div className="rise-cw-header-text">
              <div className="rise-cw-title">Assistant RISE</div>
              <div className="rise-cw-subtitle">
                <span className="rise-cw-dot-online" /> En ligne · propulsé par IA
              </div>
            </div>
            <button className="rise-cw-header-btn" onClick={clearChat} title="Nouvelle conversation" aria-label="Nouvelle conversation">↺</button>
            <button className="rise-cw-header-btn" onClick={() => setOpen(false)} title="Fermer" aria-label="Fermer">✕</button>
          </div>

          <div className="rise-cw-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div className={`rise-cw-row ${m.role}`} key={i}>
                <div>
                  <div className={`rise-cw-bubble ${m.warn ? 'warn' : ''}`}>{m.text}</div>
                  {m.role === 'bot' && <SourceList sources={m.sources} />}
                  {m.role === 'bot' && m.log_id && !m.warn && <Feedback logId={m.log_id} />}
                </div>
              </div>
            ))}

            {hasOnlyWelcome && (
              <div className="rise-cw-suggestions">
                {SUGGESTIONS.map((q) => (
                  <button key={q} className="rise-cw-suggestion" onClick={() => send(q)}>
                    <span>{q}</span>
                    <span>→</span>
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="rise-cw-row bot">
                <div className="rise-cw-bubble">
                  <div className="rise-cw-typing"><span /><span /><span /></div>
                </div>
              </div>
            )}
          </div>

          <div className="rise-cw-footer">
            <textarea
              ref={inputRef}
              className="rise-cw-input"
              placeholder="Posez votre question…"
              rows={1}
              value={input}
              onChange={onInputChange}
              onKeyDown={onKeyDown}
            />
            <button
              className="rise-cw-send"
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              aria-label="Envoyer"
            >
              ➤
            </button>
          </div>
          <div className="rise-cw-disclaimer">
            L'assistant peut faire des erreurs. Vérifiez les informations importantes.
          </div>
        </div>
      )}
    </div>
  );
}
