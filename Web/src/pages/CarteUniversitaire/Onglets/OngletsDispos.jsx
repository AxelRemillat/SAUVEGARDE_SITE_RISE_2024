import React, { useRef, useState, useEffect } from "react";
import { getCountryflag } from "../../../data/getcountryflag";

const OngletsDispos = ({ continent, countries, onFlagClick }) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const scrollRef = useRef(null);

  const SCROLL_AMOUNT = 160;

  useEffect(() => {
    updateArrows();
  }, [countries]);

  const updateArrows = () => {
    const container = scrollRef.current;
    if (!container) return;
    setShowLeft(container.scrollLeft > 0);
    setShowRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 5);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    container.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };

  const containerStyle = {
    marginTop: "50px",
    marginBottom: "15px",
    marginLeft: "-25px",
    paddingRight: "10px",
    maxWidth: "100%",
    width: "100%",
  };

  const titleStyle = {
    fontSize: "27px",
    color: "#333",
    marginBottom: "12px",
  };

  const scrollAreaStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const arrowStyle = {
    width: "36px",
    height: "36px",
    backgroundColor: "#eee",
    borderRadius: "50%",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    fontSize: "20px",
    zIndex: 10,
  };

  const flagsWrapperStyle = {
    overflow: "hidden",
    width: `${66 * 17 + 10 * 16}px`, // 17 drapeaux + 16 espaces
    maxWidth: "100%",
  };

  const scrollContainerStyle = {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    flexWrap: "nowrap",
    padding: "6px 0",
  };

  const flagBaseStyle = {
    width: "66px",
    height: "42px",
    borderRadius: "7px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    flexShrink: 0,
    opacity: 0,
  };

  const styleTag = `
    @keyframes fadeSlide {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .flag-appear {
      animation: fadeSlide 0.4s ease forwards;
    }

    .flag-hover:hover {
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .hide-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <>
      <style>{styleTag}</style>
      <div style={containerStyle}>
        <h3 style={titleStyle}>Pays disponibles :</h3>
        <div style={scrollAreaStyle}>
          {showLeft && (
            <div style={arrowStyle} onClick={() => scroll("left")}>
              ◀
            </div>
          )}
          <div style={flagsWrapperStyle}>
            <div
              style={scrollContainerStyle}
              ref={scrollRef}
              className="hide-scrollbar"
              onScroll={updateArrows}
              key={continent}
            >
              {countries.map((country, index) => (
                <img
                  key={`${continent}-${country}`}
                  className="flag-hover flag-appear"
                  src={`https://flagcdn.com/w40/${getCountryflag(country)}.png`}
                  alt={`Drapeau de ${country}`}
                  title={country}
                  onClick={() => onFlagClick(country)}
                  style={{
                    ...flagBaseStyle,
                    animationDelay: `${index * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>
          {showRight && (
            <div style={arrowStyle} onClick={() => scroll("right")}>
              ▶
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OngletsDispos;
