import React from 'react'
import style from './Pages.module.css'
import { useEffect } from 'react';

const CryptoTaxes = () => {
  useEffect(()=>{
    document.title = `KoinX | Crypto Taxes`;
  })

  return (
    <div className={style.pageContainer}>
    
    </div>
  )
}

export default CryptoTaxes
