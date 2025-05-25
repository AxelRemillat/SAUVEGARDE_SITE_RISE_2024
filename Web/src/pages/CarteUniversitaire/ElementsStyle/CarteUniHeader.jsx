import React, { useState, useRef, useEffect } from 'react';

const CarteUniHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e) => {
    setDragging(true);
    const rect = modalRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onDrag = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const endDrag = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', endDrag);
    } else {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', endDrag);
    }
    return () => {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', endDrag);
    };
  }, [dragging]);

  return (
    <>
      {/* Bannière principale */}
      <div style={styles.headerContainer}>
        <div style={styles.headerLeft}>
          <p style={styles.headerTitle}>Carte Universitaire de l'ESME édition 2024</p>
          <img
            src="https://primary.jwwb.nl/public/g/c/w/temp-pdlrlsxjwvkbgyallwla/esme_logo_seul_quadri_2021-high.png?enable-io=true&fit=cover&width=400&height=400"
            alt="Logo ESME"
            style={styles.headerLogo}
          />
        </div>

        <div style={styles.headerRight}>
          <span style={styles.headerLink} onClick={() => setModalOpen(true)}>Comment marche la carte ?</span>
          <img
            src="https://pngimg.com/d/question_mark_PNG134.png"
            alt="Icône"
            style={styles.headerIcon}
          />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div style={styles.modalOverlay}>
          <div
            ref={modalRef}
            onMouseDown={startDrag}
            style={{
              ...styles.modal,
              top: position.y,
              left: position.x,
              position: 'absolute',
              cursor: 'move'
            }}
          >
            <div style={styles.modalHeader}>
              <img
                src="https://pngimg.com/d/question_mark_PNG134.png"
                alt="Icône"
                style={{ maxWidth: 60, marginBottom: 10 }}
              />
              <h2 style={{ margin: 0, fontSize: 22 }}>Carte Universitaire</h2>
            </div>
            <span style={styles.closeBtn} onClick={() => setModalOpen(false)}>×</span>
            <div style={styles.modalContent}>
              <p>- 3 filtres</p>
              <p>- Niveau Ielts</p>
              <p>- xxxxxxxxxxxxxxx</p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(145deg, #6A1B9A, #8E24AA)',
    color: 'white',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '1600px',
    margin: '60px auto 0',
    width: '100%',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 0,
    lineHeight: 1.2,
  },
  headerLogo: {
    maxHeight: 70,
    marginLeft: 10,
  },
  headerLink: {
    fontSize: 25,
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: 15,
    color: 'white',
  },
  headerIcon: {
    maxHeight: 70,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // rend le fond cliquable
    zIndex: 10000,
  },
  modal: {
    background: 'white',
    borderRadius: 20,
    padding: 20,
    maxWidth: 600,
    width: '90%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    zIndex: 10001,
    pointerEvents: 'auto',
  },
  modalHeader: {
    background: 'linear-gradient(145deg, #E91E63, #D81B60)',
    padding: 15,
    color: '#000000',
    borderRadius: '20px 20px 0 0',
    textAlign: 'center',
  },
  modalContent: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
  closeBtn: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 24,
    color: '#999',
    cursor: 'pointer',
  }
};

export default CarteUniHeader;
