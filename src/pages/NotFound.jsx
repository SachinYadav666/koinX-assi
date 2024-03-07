import React from 'react'
import { useEffect } from 'react';
import style from './Pages.module.css'

const NotFound = () => {
  useEffect(()=>{
    document.title = `KoinX | 404 Not Found `;
  })
  return (
    <div className={style.pageContainer}>
    
    </div>
  )
}

export default NotFound
