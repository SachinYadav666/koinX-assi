import React from 'react'
import { useEffect } from 'react';
import style from './Pages.module.css'

const GetStarted = () => {
  useEffect(()=>{
    document.title = `KoinX | Get Started`;
  })
  return (
    <div className={style.pageContainer}>
    
    </div>
  )
}

export default GetStarted
