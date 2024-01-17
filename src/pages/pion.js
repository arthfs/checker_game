import React from 'react'
import styles from '../styles/Home.module.css'

var u = [5,4.5,4,3.5,3,2.5,2]

export default function Pion({color}) {
    return   <div   onClick={()=>{


    
    }} className={styles.test}>
      {
        u.map((i)=>{
          var height =`${i*10}`;
          
          return (<div id={`${u.indexOf(i)}`}  className={styles.circle} key={u.indexOf(i)} style={{position:"absolute" , borderRadius:`${  260/2}px`, left: `${ 50 - parseInt(height)}px`   ,right:`${ 50 - parseInt(height)}px` , top:`${ 50 - parseInt(height)}px` ,bottom:`${ 50 - parseInt(height)}px`, backgroundColor:`${color}`}}></div>)
        })
      }
  
  </div>
}
