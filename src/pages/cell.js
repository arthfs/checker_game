import React, { useState } from 'react'
import { clear_cell_color, move, possibility, remove_piece, set_color } from './dimensions'

import {context} from './context'
import { experience_context } from './experience'
import { player } from '.'
import  { reference } from './reference'
import styles from '../styles/Home.module.css'
import { turn_context } from './turncontext'
import { useContext } from 'react'
import { useEffect } from 'react'

var nextmove
export default function Cell({ke,cls,id,child=undefined} ) {
  const [temp,settemp] = useState([])
  const {turn,changeturn} = useContext(turn_context)
  const changetemp = (newvalue)=> settemp(newvalue)

  const {possibilities,changepossibilities} = useContext(context)
  const {ref,changeref} = useContext(reference)
  const { board,changeboard } = useContext(experience_context)
  
  useEffect(()=>{
//  console.log(possibilities)
  changetemp(possibilities)
  if (nextmove!=undefined)
  {
  var result = possibility( 'player 2','4 5','4 5',board)['possibilities']
  console.log(result) 
 
 // set_color(result)
  //changepossibilities([['4 5',result,'4 5']])
  nextmove = undefined
  }
//  console.log(temp)

  },[board,possibilities])

  useEffect(()=>{
 
    let translationX = 0 
    let translationY = 0
    const element    = document.getElementById(id)

    const handleClick=()=>{
    // change_deleted_piece ('er')
   //  console.log(deletedpiece)
//console.log(temp)
       
        
        var test  = `${parseInt( id[1])-1 } ${parseInt( id[3])-1}`
     
        var source=''
        var source1=''
        var destination =''
        var clear = []
      if ( board[test]=='blackcells' || board[test][0]==null)
            {   let present = false; 
                 //console.log(id)
                try 
                {//console.log(temp)
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
                            // console.log(temp[p])
                            var  id_to_be_deleted = possibility( player,temp[p][1],temp[p][0],board)['deleted']
                            var result_x,result_y
                            changeref({[source]:null})
                            //console.log(destination.)
                             changeref({[destination.replace('c','')]:ref[source]})
                           // console.log(ref[destination])
                            nextmove = '4 5'
                           // console.log(`${ parseInt(source[0])-1} ${ parseInt(source[2])-1} ${ parseInt(id[1])-1} ${ parseInt(id[3])-1}`)
                        //   console.log(temp[p])
                           // console.log( id_to_be_deleted )
                        //  changepossibilities(possibility( 'player 2','4 5','4 5',board)['possibilities'])
                           //set_color([['4 5','c4 5']])
                         
                          // set_color(result)

                        //console.log(   possibility( 'player 2','4 5','4 5',board)['possibilities'])
                            if (id_to_be_deleted.length<2)
                            {
                              remove_piece(changeboard,id_to_be_deleted[0])
                              //changeturn(turn =='player 1' ? 'player 2': 'player 1') 
                            
                            }
                            else 
                            {
                              var destination_x = parseInt(id[1])-1,destination_y = parseInt(id[3])-1
                              var source_x = parseInt(source[0])-1,source_y = parseInt(source[2])-1
                              
                              result_x = destination_x > source_x ? source_x+1 : source_x-1
                              result_y = destination_y > source_y ? source_y+1 : source_y-1
                              remove_piece (changeboard,`${result_x} ${result_y}`)
                             // changeturn(turn =='player 1' ? 'player 2': 'player 1') 
                               
                             
                            }
                          
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
                    // console.log(board[po])
                     var isking=  board[po][0][0] =='k' ;
                     //console.log(isking)
              
                     changeboard({[po]:poo})
                
                    var po1 =  `${parseInt( destination[1])-1 } ${parseInt( destination[3])-1}`
                  
                    var test = `${parseInt(id[1])-1} ${parseInt(id[3])-1}`
                    var poo1 = [ parseInt(source[0])<4 ? 'white': 'red',"blackcells"] 
                
                   if (!isking && [1,8].includes( parseInt(destination[1])) ) 
                   { //console.log(!isking)
                    changeboard({[test]:[ 'k'+board[po][0] ,'blackcells']}) 
                   }
                   else 
                   {//console.log(test)
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
