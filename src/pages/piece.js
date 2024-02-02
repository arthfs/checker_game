import React, { useContext, useEffect } from 'react'

import { remove_piece, clear_cell_color } from './dimensions';
import {context} from  './context'
import { experience_context } from './experience'
import {player} from './index'
import { possibility } from './dimensions';
import { reference } from './reference';
import styles from "../styles/Home.module.css"

var u = [5,4.5,4,3.5,3,2.5,2]
var temp_pos= []

export default function Piece({color,id,position}) {
  

const {possibilities,changepossibilities} = useContext(context)
const { board,changeboard } = useContext(experience_context)
const {ref} = useContext(reference)


temp_pos = [...possibilities]
useEffect(() => {
 
}, [possibilities]); 


var pos;
useEffect(()=>{
  try{
  var tess =[];
  tess = [...possibility(player,ref[id],id,board)['possibilities']]

  pos = [... tess ];
  } catch(e){}

},[ref,board])

useEffect(()=>
{

const element = document.getElementById(id);

const handleClick = () =>{
//  remove_piece(changeboard,'5 0')

    if (true)
    { 
    var oldstyle = document.getElementById('c1 2')
   // restore the style of the current  cells a piece can move 
   for (let j = 0;j<temp_pos.length;j++)
    { 
      try{ 
       for (let k =0;k<temp_pos[j][2].length;k++ ) 
         {
         clear_cell_color(temp_pos[j][2][k][1])
         }
   
    }
    catch(e){console.log(e.message)
      
  }
    }
    temp_pos = []
    //changepossibilities ([])
    
   
    for (let i=0 ;i<pos.length;i++ )
    {
      temp_pos.push(pos[i])
    }

    // get the cells a piece can move
     changepossibilities([[id,possibility(player,ref[id],id,board)['position'],temp_pos]])

     // change their style
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

try{
element.addEventListener ('click',handleClick)
} 
catch(e) {}

 return ()=>{ 
  try{ element.removeEventListener('click',handleClick)
}
catch(e){}
};


    
},[ref,board]);
  
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
