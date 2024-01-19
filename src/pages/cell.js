import React, { useState } from 'react'
import Reference, { reference } from './reference'
import { clear_cell_color, move } from './dimensions'

import {context} from './context'
import { experience_context } from './experience'
import styles from '../styles/Home.module.css'
import { useContext } from 'react'
import { useEffect } from 'react'

export default function Cell({ke,cls,id,child=undefined} ) {
  const [temp,settemp] = useState([])
  const changetemp = (newvalue)=> settemp(newvalue)

   
  const {possibilities,changepossibilities} = useContext(context)
  const {ref,changeref} = useContext(reference)
  const { board,changeboard } = useContext(experience_context)
  
 
  
  useEffect(()=>{
  

  changetemp(possibilities)
  },[board,possibilities])

  useEffect(()=>{

    let translationX = 0 
    let translationY = 0
    const element    = document.getElementById(id)

    const handleClick=()=>{
      var test  = `${parseInt( id[1])-1 } ${parseInt( id[3])-1}`
     
 
        var source=''
        var clear = []
      if ( board[test]=='blackcells' || board[test][0]==null)
            {   let present = false; 
         
                try {
                for (let p=0 ; p<temp.length ;p++) 
                {   var e = temp[p][1]
                    let quit = false
                                  
                      for (let q=0; q<temp[p][1].length;q++)
                     { 
                        if (temp[p][1][q][1] == id)  
                        {   clear.push(id)
                            present = true; 
                            source = temp[p][0];
                            console.log(id)
                            quit = true;
                            break;
                          
                        }
                        if (quit) break
                      }
                        
                }
            } 
            catch(e)
            { 
            console.log(e.message)
              
            }// console.log(clear)
               // console.log(present)
    
                if (present) {
           
                    translationY+= (70 * (parseInt(id[1])- parseInt(source[0] )))
                    translationX+= (70 * (parseInt(id[3])- parseInt(source[2] ))) 
                   
                    var id1 = id.replace('c','')
                    changeref({ [source] : id1 })
                
                try
                {   
                    changepossibilities([])
                    clear_cell_color(possibilities)
                   
                    console.log(possibilities)
                    document.getElementById(source).style.transition='translate 0.32 ms';
                    document.getElementById(source).style.transform=`translate( ${translationX}px , ${translationY}px )`;
                    
                    var po = `${parseInt( source[0])-1 } ${parseInt( source[2])-1}`
                    var poo = [null,"blackcells"]
                    changeboard({[po]:poo})
                    
                 
                }
                catch(e){
                    console.log(`cannot move piece of id ${source}`)
                }
                }
            }
            else
            {
      //        console.log(`busy cell ${id}`)
            // console.log(child.props.id)
            }
           // console.log(board['2 5'])
      }
    element.addEventListener('click',handleClick)
    return ()=>{element.removeEventListener('click',handleClick)}
  },[temp,possibilities])
  

  
  

  
  
  return (child!=undefined)? (
    <div key={ke} id={id} className={styles.blackcells }> {child} </div>
  ) :  <div key={ke} id={id} className={ cls }> </div>
  

}
