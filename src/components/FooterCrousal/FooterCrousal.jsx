import React, { useRef } from "react";

import style from "./Footer.module.css";
import SmallCard from "../Cards/SmallCard";

const FooterCrousal = () => {
  const cryptoSymbols = ["BTCUSD", "ETHUSD", "ADAUSD", "LTCUSD", "XRPUSD"];

  const carouselRef = useRef(null);

  const scrollToNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const scrollToPrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  return (
    <>
    <div className={style.carouselContainer}>
      <button className={style.prevButton} onClick={scrollToPrev}>
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <div className={style.carousel} ref={carouselRef}>
        {cryptoSymbols.map((symbol) => (
          <div key={symbol} className={style.carouselItem}>
            <SmallCard symbol={symbol} />
          </div>
        ))}
      </div>
      <button className={style.nextButton} onClick={scrollToNext}>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
    
    </>
  );
};

export default FooterCrousal;
