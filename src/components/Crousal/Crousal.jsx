import React, { useRef } from "react";
import style from "./Crousal.module.css";
import SentimentCard from "../Cards/SentimentCard";

const Crousal = () => {
  const colorList = ["red", "green", "blue"];
  const colorCardRef = useRef(null);

  const scrollToNext = () => {
    colorCardRef.current.scrollLeft += colorCardRef.current.offsetWidth;
  };

  const scrollToPrev = () => {
    colorCardRef.current.scrollLeft -= colorCardRef.current.offsetWidth;
  };

  return (
    <div className={style.carouselContainer}>
      <button className={style.prevButton} onClick={scrollToPrev}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <div className={style.carousel} ref={colorCardRef}>
        {colorList.map((symbol) => (
          <div key={symbol} className={style.carouselItem}>
            <SentimentCard color={symbol} />
          </div>
        ))}
      </div>
      <button className={style.nextButton} onClick={scrollToNext}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
  );
};

export default Crousal;
