import React, { useContext, useEffect } from 'react'

import Cell from './cell'
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
               if (board[pos][0]!= null)
               { 
               temp.push(
               
                   <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos][1] == 'blackcells' ? styles.blackcells : styles.whitecells  }  child={<Piece id={`${i+1} ${j+1}`} position={`${i+1} ${j+1}`} color={board[pos][0]} ></Piece>} >  </Cell> )
                 }
   
               else 
               {
                 temp.push(
                 <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos][1] == 'blackcells' ? styles.blackcells : styles.whitecells  }  >  </Cell> 
                 )
               }
               //temp.push(<Pion color={ar[pos]} ></Pion>)
             }
          else temp.push(<Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ board[pos] == 'blackcells' ? styles.blackcells : styles.whitecells  }  ></Cell>)
       }
       
       result.push(<div style={{width:'fit-content', display:'flex',flexDirection:'row',columnGap:'2px'}}> {temp} </div> )
   } 
   
  changeresult(result)

  },[])
//console.log(result)



return (
    <> 
    <div className={styles.title}>     experience </div> 
    
   
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
