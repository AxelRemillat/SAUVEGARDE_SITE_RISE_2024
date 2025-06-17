import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect = ({ duration = 2000 }) => {
  useEffect(() => {
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, [duration]);

  return null; // Pas d'élément visuel, juste l'effet
};

export default ConfettiEffect;
