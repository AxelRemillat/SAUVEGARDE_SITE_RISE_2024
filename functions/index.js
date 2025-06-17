const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

//  Chargement des variables via `firebase functions:config:set`
const GMAIL_USER = functions.config().gmail.email;
const GMAIL_PASS = functions.config().gmail.pass;

console.log("GMAIL_USER:", GMAIL_USER);
console.log("GMAIL_PASS:", GMAIL_PASS ? '********' : 'undefined');

//  Transporter configuré avec variables de config Firebase
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS
  }
});

exports.sendEmailCode = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).send({ error: 'Méthode non autorisée' });
    }

    const { email, code } = req.body;

    if (!email || !code) {
      console.error('Requête invalide. Corps reçu :', req.body);
      return res.status(400).send({ error: 'Email et code requis.' });
    }

    const mailOptions = {
      from: `"RISE" <${GMAIL_USER}>`,
      to: email,
      subject: 'Votre code de vérification',
      html: `<p>Voici votre code de vérification : <strong>${code}</strong></p>`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Email envoyé à ${email}`);
      return res.status(200).send({ success: true });
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi de l\'email :', error);
      return res.status(500).send({ error: 'Erreur envoi email' });
    }
  });
});


