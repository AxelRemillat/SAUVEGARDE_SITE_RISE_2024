import React, { useState } from 'react';
import TemAfrique from '../../assets/ImagesAccueil_backup/TemAfrique.webp';
import TemAN from '../../assets/ImagesAccueil_backup/TemAN.webp';
import TemAS from '../../assets/ImagesAccueil_backup/TemAS.webp';
import TemAsie from '../../assets/ImagesAccueil_backup/TemAsie.webp';
import TemEurope from '../../assets/ImagesAccueil_backup/TemEurope.webp';
import TemOceanie from '../../assets/ImagesAccueil_backup/TemOceanie.webp';
import { TEMOIGNAGES } from '../../data/temoignages';

const imageData = [
  { id: 'Europe', label: 'Europe', image: TemEurope },
  { id: 'Asia', label: 'Asie', image: TemAsie },
  { id: 'Oceania', label: 'Océanie', image: TemOceanie },
  { id: 'US', label: 'Amérique du Nord', image: TemAN },
  { id: 'Africa', label: 'Afrique', image: TemAfrique },
  { id: 'SouthAmerica', label: 'Amérique du Sud', image: TemAS },
];

// Couleur déterministe (fallback avatar initiales)
const AVA_COLORS = ['#c42727', '#7c3aed', '#2563eb', '#0891b2', '#16a34a', '#d97706', '#db2777'];
function colorFromName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVA_COLORS[Math.abs(h) % AVA_COLORS.length];
}

function Avatar({ src, name }) {
  const [err, setErr] = useState(false);
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  if (err || !src) {
    return (
      <div className="t-avatar t-avatar-fallback" style={{ backgroundColor: colorFromName(name) }}>
        {initials}
      </div>
    );
  }
  return <img className="t-avatar" src={src} alt={name} loading="lazy" onError={() => setErr(true)} />;
}

// Photo de destination libre de droits (loremflickr) avec repli sur l'image du continent
function DestImage({ photo, lock, fallback, place, program }) {
  const [src, setSrc] = useState(`https://loremflickr.com/700/440/${photo}?lock=${lock}`);
  return (
    <div className="t-photo">
      <img src={src} alt={place} loading="lazy" onError={() => setSrc(fallback)} />
      <span className="t-program">{program}</span>
      <span className="t-place">{place}</span>
    </div>
  );
}

function Stars({ n }) {
  return (
    <span className="t-stars" aria-label={`${n} sur 5`}>
      {'★'.repeat(n)}<span className="t-stars-empty">{'★'.repeat(5 - n)}</span>
    </span>
  );
}

const Temoignages = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const active = imageData.find((item) => item.id === activeModal);
  const list = activeModal ? (TEMOIGNAGES[activeModal] || []) : [];

  return (
    <>
      <section className="continents">
        <h2 className="continents-subtitle">
          Découvre leurs témoignages, continent par continent
        </h2>
        <div className="continent-grid">
          {imageData.map((item) => {
            const count = (TEMOIGNAGES[item.id] || []).length;
            return (
              <button className="continent-card" key={item.id} onClick={() => openModal(item.id)}>
                <div className="cc-photo">
                  <img src={item.image} alt={item.label} />
                  <span className="cc-name">{item.label}</span>
                </div>
                <div className="cc-foot">
                  <span className="cc-count">{count} témoignages</span>
                  <span className="cc-arrow">Lire →</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {activeModal && (
        <div className="modal-overlay active" onClick={closeModal}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="custom-close-btn" onClick={closeModal}>&times;</div>

            <div className="modal-header" style={{ backgroundImage: `url(${active?.image})` }}>
              <div className="modal-header-overlay">
                <span className="modal-kicker">Témoignages d'étudiants</span>
                <h2>{active?.label}</h2>
                <p>{list.length} retours d'expérience par destination</p>
              </div>
            </div>

            <div className="t-grid">
              {list.map((t, i) => (
                <article className="t-card" key={i}>
                  <DestImage
                    photo={t.photo}
                    lock={i + 1}
                    fallback={active?.image}
                    place={`${t.city}, ${t.country}`}
                    program={t.program}
                  />
                  <div className="t-body">
                    <div className="t-head">
                      <Avatar src={t.avatar} name={t.name} />
                      <div className="t-id">
                        <div className="t-name">{t.name}<span className="t-age"> · {t.age} ans</span></div>
                        <div className="t-uni">{t.university}</div>
                        <Stars n={t.rating} />
                      </div>
                    </div>
                    <p className="t-text">“{t.text}”</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ── Sélecteur de continents (bloc principal) ── */
        .continents {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 28px 72px;
        }

        .continents-subtitle {
          text-align: center;
          color: #1a1a1a;
          font-size: 30px;
          font-weight: 800;
          margin: 0 0 36px;
          line-height: 1.2;
        }

        .continent-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .continent-card {
          padding: 0;
          background: #fff;
          border: 1px solid #ececec;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          text-align: left;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          font-family: inherit;
        }
        .continent-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 38px rgba(196,39,39,0.18);
          border-color: #f0c9c9;
        }

        .cc-photo { position: relative; height: 240px; overflow: hidden; }
        .cc-photo img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.45s ease;
        }
        .continent-card:hover .cc-photo img { transform: scale(1.08); }
        .cc-photo::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 55%);
        }
        .cc-name {
          position: absolute; left: 22px; bottom: 16px; z-index: 1;
          color: #fff; font-size: 32px; font-weight: 800;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .cc-foot {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px;
        }
        .cc-count { font-size: 15px; font-weight: 700; color: #c42727; }
        .cc-arrow { font-size: 15px; font-weight: 700; color: #1a1a1a; transition: transform 0.2s ease; }
        .continent-card:hover .cc-arrow { transform: translateX(4px); }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed; inset: 0;
          background-color: rgba(0, 0, 0, 0.55);
          display: none; justify-content: center; align-items: center; z-index: 1000;
        }
        .modal-overlay.active { display: flex; }

        .custom-modal {
          position: relative;
          display: flex; flex-direction: column;
          width: 92%; height: 88%; max-width: 1200px;
          background-color: #fbf7ef;
          border-radius: 20px;
          padding: 0 0 30px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          overflow-y: auto;
        }

        .custom-close-btn {
          position: fixed; top: 20px; right: 20px;
          width: 50px; height: 50px;
          background-color: #ff0000; color: #fff; border: none;
          border-radius: 10px; font-size: 30px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 1001; transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .custom-close-btn:hover { background-color: #d40000; transform: scale(1.1); }

        .modal-header {
          height: 200px; background-size: cover; background-position: center;
          border-radius: 20px 20px 0 0; display: flex; align-items: flex-end;
        }
        .modal-header-overlay {
          width: 100%; padding: 28px 40px 22px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));
          color: #fff; border-radius: 20px 20px 0 0;
        }
        .modal-kicker {
          font-size: 13px; text-transform: uppercase; letter-spacing: 0.14em;
          font-weight: 700; color: #ffd2d2;
        }
        .modal-header-overlay h2 { margin: 4px 0 2px; font-size: 38px; font-weight: 800; }
        .modal-header-overlay p { margin: 0; font-size: 15px; opacity: 0.9; }

        /* ── Grille de témoignages ── */
        .t-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 24px;
          padding: 30px 40px 0;
        }

        .t-card {
          background: #fff;
          border: 1px solid #ececec;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(0,0,0,0.06);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          display: flex; flex-direction: column;
        }
        .t-card:hover { transform: translateY(-5px); box-shadow: 0 14px 30px rgba(196,39,39,0.14); }

        .t-photo { position: relative; height: 158px; overflow: hidden; }
        .t-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .t-photo::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%);
        }
        .t-place {
          position: absolute; left: 14px; bottom: 10px; z-index: 1;
          color: #fff; font-size: 15px; font-weight: 800;
          text-shadow: 0 2px 6px rgba(0,0,0,0.6);
        }
        .t-program {
          position: absolute; top: 12px; right: 12px; z-index: 1;
          background: rgba(196,39,39,0.92); color: #fff;
          font-size: 11px; font-weight: 700;
          padding: 4px 10px; border-radius: 20px;
        }

        .t-body { padding: 0 20px 20px; position: relative; z-index: 1; }

        .t-head { display: flex; gap: 14px; }
        .t-avatar {
          width: 62px; height: 62px; border-radius: 50%; object-fit: cover;
          flex-shrink: 0; border: 3px solid #fff; margin-top: -32px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.18); background: #eee;
        }
        .t-avatar-fallback {
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 800; font-size: 22px;
        }
        .t-id { min-width: 0; padding-top: 6px; }
        .t-name { font-size: 17px; font-weight: 800; color: #1a1a1a; }
        .t-age { font-weight: 500; color: #888; }
        .t-uni { font-size: 13px; font-weight: 600; color: #c42727; margin: 2px 0 4px; }

        .t-stars { color: #f5a623; font-size: 15px; letter-spacing: 1px; }
        .t-stars-empty { color: #e0e0e0; }

        .t-text {
          margin: 14px 0 0; font-size: 14.5px; line-height: 1.65;
          color: #333; font-style: italic;
        }

        @media (max-width: 980px) {
          .continent-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .continent-grid { grid-template-columns: 1fr; gap: 22px; }
          .continents { padding: 28px 16px 50px; }
          .t-grid { grid-template-columns: 1fr; padding: 22px 16px 0; }
          .modal-header-overlay h2 { font-size: 28px; }
          .continents-subtitle { font-size: 23px; }
        }
      `}</style>
    </>
  );
};

export default Temoignages;
