import React from 'react'
import { useEffect } from 'react';
import style from './Pages.module.css'

const FreeTools = () => {
  useEffect(()=>{
    document.title = `KoinX | Free Tools`;
  })
  return (
    <div className={style.pageContainer}>
    
    </div>
  )
}

export default FreeTools
