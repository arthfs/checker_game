import React, { useState } from 'react'
import { clear_cell_color, move,remove_piece } from './dimensions'
import {context} from './context'
import { experience_context } from './experience'
import  { reference } from './reference'
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
   try {console.log(temp)
  }
   catch(e){}
     
        var test  = `${parseInt( id[1])-1 } ${parseInt( id[3])-1}`
     
        var source=''
        var source1=''
        var destination =''
        var clear = []
      if ( board[test]=='blackcells' || board[test][0]==null)
            {   let present = false; 
         
                try {//console.log(temp)
                for (let p=0 ; p<temp.length ;p++) 
                {   var e = temp[p][1]
                    let quit = false
                                  
                      for (let q=0; q<temp[p][2].length;q++)
                     { //console.log(temp[p])
                        if (temp[p][2][q][1] == id)  
                        {   clear.push(id)
                            present = true; 
                            source = temp[p][0];
                            source1 = temp[p][1]
                           source1= temp[p][2][q][1]
                           destination = temp[p][2][q][1]
                            console.log(temp[p])
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
              
            }
    
                if (present) {
                    
                    translationY+= (70 * (parseInt(id[1])- parseInt(source[0] )))
                    translationX+= (70 * (parseInt(id[3])- parseInt(source[2] ))) 
                   
                    var id1 = id.replace('c','')

                    
             //   try
                //{   
                   clear_cell_color(possibilities)
                    changepossibilities([])
                            
                   
                    //document.getElementById(source).style.transition='translate 0.32 ms';
                    //document.getElementById(source).style.transform=`translate( ${translationX}px , ${translationY}px )`;
                     source= source.replace('k','')
                     var po = `${parseInt( source[0])-1 } ${parseInt( source[2])-1}`
                     var poo = [null,"blackcells"]
                     console.log(po)
                     var isking=  board[po][0] =='k' ;
                     console.log(isking)
              
                     changeboard({[po]:poo})
                
                    var po1 =  `${parseInt( destination[1])-1 } ${parseInt( destination[3])-1}`
                  
                    var test = `${parseInt(id[1])-1} ${parseInt(id[3])-1}`
                    var poo1 = [ parseInt(source[0])<4 ? 'white': 'red',"blackcells"] 
                
                   if (!isking && [1,8].includes( parseInt(destination[1])) ) 
                   { 
                    changeboard({[test]:[ 'k'+board[po][0] ,'blackcells']}) 
                   }
                   else 
                   {
                   changeboard({[test]:[ board[po][0],'blackcells']})
                   }
                   
                 
                }
            }
            else
            {
      //        console.log(`busy cell ${id}`)
            // console.log(child.props.id)
            }
           
      }
    element.addEventListener('click',handleClick)
    return ()=>{element.removeEventListener('click',handleClick)}
  },[temp,possibilities])
  

  
  
  return (child!=undefined)? (
    <div key={ke} id={id} className={styles.blackcells }> {child} </div>
  ) :  <div key={ke} id={id} className={ cls }> </div>
  

}
