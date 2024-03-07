import React from 'react'
import FooterCrousal from '../FooterCrousal/FooterCrousal'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.containerFooter}>
      <h1 className={style.firstHeading}>You May Also Like!</h1>
      <FooterCrousal/>
      <h1 className={style.secondHeading}>Trending Coins </h1>
      <FooterCrousal/>
    </div>
  )
}

export default Footer
