import React from 'react'
import { useEffect } from 'react';
import style from './Pages.module.css'
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'

const HomePage = () => {
  useEffect(()=>{
    document.title = `KoinX | Home`;
  })
  return (
    <div className={styles.pageContainer}>
      <h1>Welcome to KoinX</h1>
      <p>To check the assignment, you have to enter a coin name in the URL after the domain.</p>
      <p>For example: www.koinx.com/coins/bitcoin or www.koinx.com/coins/ethereum</p>
      <p>Replace 'coinname' with the name of the coin like bitcoin or ethereum.</p>
      <p>Click <Link to="/coins/bitcoin">here</Link> to view Bitcoin's details.</p>
      <p>Click <Link to="/coins/ethereum">here</Link> to view Ethereum's details.</p>
    </div>
  )
}

export default HomePage
