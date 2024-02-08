import React, { useContext } from 'react'

import Styles from '../styles/Home.module.css'
import {context} from  './context'
import { experience_context } from './experience'
import {player} from './index'
import { possibility } from './dimensions';
import { useEffect } from 'react'

export default function King({piece,id,position}) {
  const {board}   = useContext(experience_context)
  const {possibilities,changepossibilities} = useContext(context)
  useEffect(()=>{
  
    if (possibilities[0]!=undefined)
    {
    {}

    // set the background color for all the cells a king can move
    for (let i =0 ;i<possibilities[0][2].length;i++)
    {
  
    var cell =  document.getElementById(possibilities[0][2][i][1])
    try {
    // cell.style.backgroundColor = 'yellow'
    }
    catch(e){}
    }
  }
    const handleclick = ()=> {
      //update all the cells a king can move
      const poss = possibility(player,position,id,board)
    //  console.log(poss['position'])
      changepossibilities ([[id,poss['position'],poss['possibilities']]] )
     
     }
   
   const element = document.getElementById(id)
   element.addEventListener('click',handleclick)
   return ()=> {element.removeEventListener('click',handleclick)}
  
 
   
  },[possibilities])
  return (
    <div className={Styles.king} id={id}  >
       {piece}
       <img className={Styles.star} src='king.jpg'></img>
    </div>
  )
}
