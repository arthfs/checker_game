import React, { useCallback, useContext } from 'react'

import Piece from './piece'
import Styles from '../styles/Home.module.css'
import {context} from  './context'
import { experience_context } from './experience'
import { possibility } from './dimensions';
import { useEffect } from 'react'

export default function King({piece,id,position}) {
  const {board}   = useContext(experience_context)
  const {possibilities,changepossibilities} = useContext(context)
  useEffect(()=>{
    for (let i =0 ;i<possibilities.length;i++)
    {
    // console.log(possibilities[i])
    //var element =  document.getElementById('c5 0')
     
     var cell =  document.getElementById(possibilities[i][1])
     //console.log(element)
    try {
     cell.style.backgroundColor = 'yellow'
    }
    catch(e){}
    }

    const handleclick = ()=> {
      console.log('clicked')
      const poss = possibility('',position,id,board)
      changepossibilities(poss['possibilities'])
    // console.log(poss)
   // var element =  document.getElementById('c5 2')
   // console.log(board['4 1'])
    //element.style.backgroundColor = 'yellow'
     
     }
   
   const element = document.getElementById(id)
   element.addEventListener('click',handleclick)
   return ()=> {element.removeEventListener('click',handleclick)}
  
 
   
  },[possibilities])
  return (
    <div className={Styles.king} id={id} >
       {piece}
       <img className={Styles.star} src='king.jpg'></img>
    </div>
  )
}
