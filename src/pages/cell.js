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
  //  console.log(`changed ${board ['0 1']}`)
//  console.log(board['5 4'])
//console.log(`56 ${board['4 3']}    45 ${board['4 5']}`)
  changetemp(possibilities)
  },[board,possibilities])

  useEffect(()=>{
   // console.log(`@@ 2 5  ${board['2 5']}`)  
    let translationX = 0 
    let translationY = 0
    const element    = document.getElementById(id)

    const handleClick=()=>{
      //changeboard({'2 5':[null,'blackcells']})
    //  console.log(`changed ${board ['0 1']}`)
      
     
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
                    //changeref({'4 7':'4 5'})
                    
                   //console.log(source)
                    //changeref({ [source] : id1 })
                    //console.log(board[`${parseInt( source[0])-1 } ${parseInt( source[2])-1 }`])
                 // console.log(  ['1','7'].includes( id[1]) )
                    
             //   try
                //{   
                   clear_cell_color(possibilities)
                    changepossibilities([])
                            
                    //console.log(possibilities)
                    document.getElementById(source).style.transition='translate 0.32 ms';
                    document.getElementById(source).style.transform=`translate( ${translationX}px , ${translationY}px )`;
                    
                     var po = `${parseInt( source[0])-1 } ${parseInt( source[2])-1}`
                     var poo = [null,"blackcells"]
                  var isking=  board[po][0] =='k' ;
                   console.log(isking)
                   //  console.log(board[po])
                     changeboard({[po]:poo})
                     //console.log(source)
                    // changeboard({'5 6':poo})
                   // console.log(board['5 6'])
                   var po1 =  `${parseInt( destination[1])-1 } ${parseInt( destination[3])-1}`
                  
                     // var po1 =  `${parseInt( source1[1])-1 } ${parseInt( source1[3])-1}`
                  var test = `${parseInt(id[1])-1} ${parseInt(id[3])-1}`
                 //  console.log(`source1 ${source1}`)
               //  console.log(`po1 ${po1}`)
                    //var poo1 =['1','7'].includes(id[1])? [id[0]<4 ? 'kwhite': 'kred','whitecells'] : [ parseInt(source[0])<4 ? 'white': 'red',"blackcells"] 
                    var poo1 = [ parseInt(source[0])<4 ? 'white': 'red',"blackcells"] 
                  // console.log(po1)
                  //  changeboard({[po1]:poo1})
                  
                   if (!isking && [1,8].includes( parseInt(destination[1])) ) 
                   {
                    changeboard({[test]:[ 'k'+board[po][0] ,'blackcells']}) 
                   }
                   else 
                   {
                   changeboard({[test]:[ board[po][0],'blackcells']})
                   }
                   
                  // console.log([1,7].includes( parseInt(destination[1])))
                  // changeboard({'4 5':['red','blackcells']})
                  //changeboard( {[po1] : ['red','blakcells']})
                   // console.log(`@@ ${po}  ${board['2 5']}`)
                  //  console.log(id)0
                //}5396 8902 1464 6379
              //  catch(e){
              //      console.log(`cannot move piece of id ${source}`)
              //  }
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
