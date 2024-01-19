import React, { useContext, useEffect } from 'react'

import { clear_cell_color } from './dimensions';
import {context} from  './context'
import { experience_context } from './experience'
import { possibility } from './dimensions';
import { reference } from './reference';
import styles from "../styles/Home.module.css"

var u = [5,4.5,4,3.5,3,2.5,2]
var temp_pos= []
var test2 = 0
export default function Piece({color,id,position}) {
  
const {possibilities,changepossibilities} = useContext(context)
const { board,changeboard } = useContext(experience_context)
const {ref} = useContext(reference)

temp_pos = [...possibilities]
useEffect(() => {

}, [possibilities]); 


var pos;
useEffect(()=>{
  var tess =[];
  tess = [...possibility('player 1',ref[id],id,board)['possibilities']]
 
  pos = [... tess ];
 //console.log(poss['3 6'])
},[ref])

useEffect(()=>
{
 
const element = document.getElementById(id);

const handleClick = () =>{
  
//  console.log(ref[id])  
    if (color == 'red')
    { 
    
    var oldstyle = document.getElementById('c1 2')
   
   for (let j = 0;j<temp_pos.length;j++)
    { 
      try{ 
       for (let k =0;k<temp_pos[j][1].length;k++ ) 
        {
         // console.log(temp_pos[j][1][k][1])
         clear_cell_color(temp_pos[j][1][k][1])
         // document.getElementById(temp_pos[j][1][k][1] ).style=oldstyle
        }
     // document.getElementById(temp_pos[j][1][1]).style=oldstyle
    }
    catch(e){console.log(`@@${temp_pos[j][1]}`)}
    }
    temp_pos = []
    changepossibilities ([])
    
    for (let i=0 ;i<pos.length;i++ )
    {
      temp_pos.push(pos[i])
    }
    
    changepossibilities([[id,temp_pos]])
    
    for (let i = 0 ;i<pos.length;i++)
    {
      try 
      {
         const test1 = document.getElementById(pos[i][1])
         test1.style.backgroundColor='yellow'
      }
      catch(e)
      {
        
      }
    }
 
    
    }
}
element.addEventListener ('click',handleClick)

 return ()=>{ element.removeEventListener('click',handleClick)};

    
},[ref]);
  


  return   <div key={id} id={id}  onClick={()=>{


    
  }} className={styles.test}>
    {
      u.map((i)=>{
        var height =`${i*10}`;
        
        return (<div id={`${u.indexOf(i)}`}  className={styles.circle} key={u.indexOf(i)} style={{position:"absolute" , borderRadius:`${  260/2}px`, left: `${ 50 - parseInt(height)}px`   ,right:`${ 50 - parseInt(height)}px` , top:`${ 50 - parseInt(height)}px` ,bottom:`${ 50 - parseInt(height)}px`, backgroundColor:`${color}`,   transition: "translate 0.01s"}}></div>)
      })
    }

</div>

}
