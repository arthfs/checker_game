import React, { useContext, useEffect } from 'react'

import Cell from './cell'
import King from './king'
import Piece from './piece'
import { experience_context } from './experience'
import styles from "../styles/Home.module.css"
import { useState } from 'react'

export default function Affichage() {
const { board,changeboard } = useContext(experience_context)
  
const [res,setresult] = useState([])
const changeresult= (newlist)=>setresult(newlist)



useEffect(()=>{
  var result = []
   // console.log(board['0 1'])
   
   for (let i=0;i<8;i++)
   {   var temp = []
       
       for (let j =0;j<8;j++)
       
       {   var pos = `${i} ${j}`
           
          if (board[pos]!= 'blackcells' && board[pos]!='whitecells') 
             { 
               if (board[pos][0]!= null && !['kred','kwhite'].includes( board[pos][0]  ))
               { 
               temp.push(
               
                   <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos][1] == 'blackcells' || board[pos][0] ==null  ? styles.blackcells : styles.whitecells  }  child={<Piece id={`${i+1} ${j+1}`} position={`${i+1} ${j+1}`} color={board[pos][0]} ></Piece>} >  </Cell> )
                                  
                 }
                 
                else if ( ['kred','kwhite'].includes( board[pos][0] ))
                { //console.log('king')
                  temp.push(
                          <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos][1] == 'blackcells' || board[pos][0] ==null  ? styles.blackcells : styles.whitecells  }  child={<King id={`k${i+1} ${j+1}`} position ={`${i+1} ${j+1}`} piece={<Piece id={'0 1'} color={ board[pos][0] =='kred' ? 'red':'white'} position={''}></Piece>}></King>} >  </Cell> )
                  

                }
               else 
               {
                 temp.push(
                 <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos][1] == 'blackcells' || board[pos][0] ==null ? styles.blackcells : styles.whitecells  }  >  </Cell> 
                 )
               }
               //temp.push(<Pion color={ar[pos]} ></Pion>)
             }
          else temp.push(<Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos] == 'blackcells' || board[pos][0] ==null  ? styles.blackcells : styles.whitecells  }  ></Cell>)
       }
       
       result.push(<div style={{width:'fit-content', display:'flex',flexDirection:'row',columnGap:'2px'}}> {temp} </div> )
   } 
   
  changeresult(result)

  },[board])





return (
    <> 
    <div className={styles.title}>     experience </div> 
    <button onClick={()=>{
  
  changeboard({'1 2':[null,'whitecells']})
  changeboard({'1 2':  [null,'whitecells']})
changeboard({'1 0' : [null,'whitecells']})
//changeboard({'4 3' : ['red','whitecells']})
changeboard({'2 1' : [null,'whitecells']})
changeboard({'0 5' : [null,'whitecells']})
changeboard({'6 5' : [null,'whitecells']})
//changeboard({'3 4' : ['red','whitecells']})
changeboard({'6 7' : [null,'whitecells']})
changeboard({'7 6' : ['white','blackcells']})
//changeboard({'6 5' : [null,'whitecells']})
changeboard({'5 4' : [null,'blackcells']})
//changeboard({'6 5' : ['red','blackcells']})
changeboard({'1 2' : [null,'whitecells']})
//changeboard({'0 1' : [null,'whitecells']})
changeboard({'1 2' : [null,'whitecells']})
changeboard({'2 3':  [null,'whitecells']})
changeboard({'4 3':  ['white','blackcells']})
//changeboard({'7 6' : [null,'whitecells']})
changeboard({'0 7' : [null,'whitecells']})
changeboard({'1 6' : [null,'whitecells']})
changeboard({'2 5' : [null,'whitecells']})
changeboard({'5 6' : [null,'whitecells']})
changeboard({'5 2' : ['white','blackcells']})
changeboard({'7 0' : [null,'whitecells']})
changeboard({'6 1' : ['white','blackcells']})
changeboard({'0 5' : ['white','whitecells']})
changeboard({'2 3' : [null,'blackcells']})
changeboard({'4 1' : ['red','blackcells']})
changeboard({'6 5' : ['kred','blackcells']})
changeboard({'5 2' : ['red','blackcells']})
changeboard({'4 5' : ['white','blackcells']})
changeboard({'2 1' : ['red','blackcells']})
changeboard({'4 5' : ['white','blackcells']})
changeboard({'5 6' : [null,'blackcells']})
changeboard({'4 3' : ['white','blackcells']})
changeboard({'4 1' : ['white','blackcells']})
changeboard({'6 3' : ['white','blackcells']})
changeboard({'7 4' : [null,'whitecells']})
//changeboard({'6 7' : ['red','blackcells']})

/*
changeboard({'6 1' : ['red','blackcells']})
changeboard({'6 3' : ['red','blackcells']})
changeboard({'4 1' : ['red','blackcells']})
changeboard({'4 3' : ['red','blackcells']})
*/
//board['5 2'] = {null:'whitecells'}

//board['7 6'] = ['kwhite','whitecells']
    
    }}>ideal position</button>
   
    <div className={styles.arthur}>
  
    <div className={styles.board}>
    {
      res.map ((e)=>{return <div style={{backgroundColor:'red'}}> {e} </div> })
    }
    </div>
        
    </div>
  </>
  ) 
}
