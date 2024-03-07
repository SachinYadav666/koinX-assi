import React from 'react'
import style from './Cards.module.css'

const SentimentCard = ({color}) => {
    let cardColorClass;
    let cardContent;
  
    switch (color) {
      case 'red':
        cardColorClass = style.redCard;
        cardContent = 'newspaper';
        break;
      case 'green':
        cardColorClass = style.greenCard;
        cardContent = 'moving';
        break;
      case 'blue':
        cardColorClass = style.blueCard;
        cardContent = 'settings';
        break;
      default:
        cardColorClass = '';
        cardContent = '';
    }
  
    return (
      <div className={`${style.crouselCards} ${cardColorClass}`}>
        <div className={style.cardimg}>
          <span className="material-symbols-outlined">
            {cardContent}
          </span>
        </div>
        <div className={style.crouselTaxt}>
          <div className={style.crouselTaxtHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
          </div>
          <div className={style.crouselPlaneTaxt}>
            Lorem ipsum dolor sit ame sint qui ratione ipsum, adipisci sapiente voluptates nostrum? Dolorum maxime in quae. Nulla sed quas doloremque, delectus laborum inventore.
          </div>
        </div>
      </div>
    );
}

export default SentimentCard
