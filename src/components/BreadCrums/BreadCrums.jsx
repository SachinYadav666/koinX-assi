import React from 'react'

const BreadCrums = ({coin}) => {
    const capitalize=(str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
    const capitalizedCoin=coin.split(' ').map(capitalize).join(' ');
  return (
    <div>
      Cryptocurrencies {'  >>  '} {capitalizedCoin}
    </div>
  )
}

export default BreadCrums
