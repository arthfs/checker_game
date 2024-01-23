import Piece from './piece'
import React from 'react'
import Styles from '../styles/Home.module.css'

export default function King({piece}) {
  return (
    <div className={Styles.king}>
       {piece}
       <img className={Styles.star} src='king.jpg'></img>
    </div>
  )
}
