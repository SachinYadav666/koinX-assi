import React from 'react'
import style from './Cards.module.css'
import TradingViewWidgetSmall from '../TradingChart/TradingViewWidgetSmall'

const SmallCard = ({symbol}) => {
  
  return (
    <div className={style.smallCard}>
      <TradingViewWidgetSmall symbol={symbol}/>
    </div>
  )
}

export default SmallCard
