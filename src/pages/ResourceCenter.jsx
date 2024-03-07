import React from 'react'
import { useEffect } from 'react';
import style from './Pages.module.css'

const ResourceCenter = () => {
  useEffect(()=>{
    document.title = `KoinX | Resource Center`;
  })
  return (
    <div className={style.pageContainer}>
    
    </div>
  )
}

export default ResourceCenter
