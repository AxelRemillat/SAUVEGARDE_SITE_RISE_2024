import React from 'react';

const ContactDeuxCadrans = () => {
  return (
    <div style={styles.container}>
      {/* Premier cadran */}
      <div style={styles.card}>
        <div style={styles.textSection}>
          <h2 className="rise-mini-title" style={styles.heading}>Nous Contacter</h2>
          <p className="rise-text" style={styles.paragraph}>
            Vous avez une question, une suggestion, ou simplement envie d'échanger avec nous ? Nous sommes là pour vous écouter ! Que ce soit pour en savoir plus sur notre projet, nous partager vos idées, ou encore nous faire part de vos expériences, nous serons ravis de vous lire.
          </p>
          <p className="rise-text" style={styles.paragraph}>
            Nous croyons fermement que vos retours et vos avis sont précieux pour améliorer notre mission et offrir une expérience qui vous correspond. N’hésitez pas à nous écrire en utilisant le formulaire ci-dessous ou en nous envoyant un e-mail à l’adresse suivante :
          </p>
        </div>
      </div>

      {/* Deuxième cadran */}
      <div style={{ ...styles.card, ...styles.offset }}>
        <div style={styles.textSection}>
          <h3 className="rise-mini-title" style={styles.heading}>Pourquoi nous contacter ?</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>📩 <strong>Questions</strong> sur nos services et fonctionnalités</li>
            <li style={styles.li}>🤝 <strong>Partenariats</strong> ou collaborations</li>
            <li style={styles.li}>🗣️ <strong>Retour d'expérience</strong> pour améliorer notre plateforme</li>
            <li style={styles.li}>🛠️ <strong>Problèmes techniques</strong> ou assistance</li>
          </ul>
          <p className="rise-text" style={styles.paragraph}>
            Nous nous engageons à vous répondre dans les plus brefs délais ! Merci pour votre confiance et votre intérêt pour notre projet !
          </p>
          <p className="rise-text" style={styles.paragraph}>
            À très bientôt !<br />L'équipe RISE
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '50px auto',
    padding: '20px',
    position: 'relative',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '70%',
    minHeight: '400px',
    position: 'relative',
    marginBottom: '200px',
  },
  offset: {
    marginTop: '-300px',
    marginLeft: '400px',
  },
  textSection: {
  },
  heading: {
    color: '#e63946',
    marginBottom: '20px',
  },
  paragraph: {
    fontWeight: 'bold',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333',
  },
};

export default ContactDeuxCadrans;
