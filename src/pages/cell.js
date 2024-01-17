import Reference, { reference } from './reference'

import React from 'react'
import {context} from './context'
import { move } from './dimensions'
import styles from '../styles/Home.module.css'
import { useContext } from 'react'
import { useEffect } from 'react'

var temp=[];
export default function Cell({ke,cls,id,child=undefined} ) {
  //  console.log(id)
 
  
  const {possibilities} = useContext(context)
  const {ref,changeref} = useContext(reference)
  useEffect(()=>{
    
   // console.log('changed to')
    //console.log(id)
   // console.log(ref['3 6'])
  },[ref])
  useEffect(()=>{
  
 //  console.log(`@@@${possibilities}`)
//   console.log(id)
   temp = [...possibilities]
  },[possibilities])

  useEffect(()=>{

    let translationX = 0 
    let translationY = 0
    const element = document.getElementById(id)

    const handleClick=()=>{
      console.log( `${temp}`)
        var source=''
        if (child==undefined)
            {   let present = false; 
                //console.log(temp[0][1][1])
                for (let p=0 ; p<temp.length ;p++) 
                {   var e = temp[p][1]
                   let quit = false
                    for (let q=0; q<temp[p][1][1].length;q++)
                     { // console.log(temp[p][1][q][1])
                        //console.log(q) 
                       //console.log(temp[1][p])
                        //console.log(`!!${temp[p][1]}`)
                        if (temp[p][1][q][1] == id)  
                        {   //console.log(temp[p][0])
                            present = true; 
                            source = temp[p][0]
                            quit = true;
                            break;
                          
                        }
                        if (quit) break
                      }
                        
                }
              
                //console.log(present)
    
                if (present) {
                  // console.log(temp)
                    translationY+= (70 * (parseInt(id[1])- parseInt(source[0] )))
                    translationX+= (70 * (parseInt(id[3])- parseInt(source[2] ))) 
                   // console.log(`${source}`)
                 //  var source1 = source.replace('c','')
                  // console.log(`${source}`)
                   var id1 = id.replace('c','')
                    changeref({ [source] : id1 })
                   // console.log(ref[id])
               //console.log(document.getElementById(source))
                try
                {
                    document.getElementById(source).style.transform=`translate( ${translationX}px , ${translationY}px )`;
                }
                catch(e){
                    console.log(`cant translate piece of id ${source}`)
                }
                }
            }
            else
            {
              console.log('busy cell')
            }
      }
    element.addEventListener('click',handleClick)
    return ()=>{element.removeEventListener('click',handleClick)}
  },[])
  

  
  

  
  
  return (child!=undefined)? (
    <div key={ke} id={id} className={styles.blackcells }> {child} </div>
  ) :  <div key={ke} id={id} className={ cls }> </div>
  

}
