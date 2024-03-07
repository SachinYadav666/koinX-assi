import React from "react";
import style from "./PriceIndicator.module.css";

const PriceIndicator = ({low,high,curr,timespan}) => {
  const highestPrice = high;
  const lowestPrice = low;
  const currentPrice = curr;
 const time=timespan?"Today's":"52W";


  const priceRange = highestPrice - lowestPrice;
  const currentPosition = ((currentPrice - lowestPrice) / priceRange) * 100;

  return (
    <div className={style.tradePriceInd}>
     
      <div className={style.prices}>
      <h3>{time} Low</h3>
      <h3>${lowestPrice}</h3>
        </div>
      <div className={style.priceBar}>
        <div className={style.bar}></div>
        <div className={timespan? style.currentPrice:style.displaynone} style={{ left: `${currentPosition}%` }}>
          <div className={ style.arrow}>
          <span className="material-symbols-outlined">arrow_drop_up</span>
          </div>
          <div className={style.prices}>${currentPrice}.</div>
        </div>
      </div>
      <div className={style.prices}>
      <h3>{time} High</h3>
      <h3>${highestPrice}</h3>
        </div>
    </div>
  );
};

export default PriceIndicator;
