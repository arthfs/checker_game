import React, { createContext, useState } from 'react'

import Cell from './cell'
import Piece from './piece'
import Pion from './pion'
import styles from '../styles/Home.module.css'

var ar = {}
for (let i =0;i<8;i++)
{
    for (let j=0;j<8;j++)
    {
        var empty =-1

        if ((i+1)%2!=0 && (i!=4) && (i!=5)) 
        {
             
                if ((j+1)%2==0)
                {
                var back = (j+1)%2==0 ? 'blackcells' :'whitecells'
                var ce = i<3 ? 'red' : 'white'
                 empty = [ce,back]
                }
                else {
                   empty = (j+1)%2==0 ? 'blackcells' :'whitecells'
                }    
          
        }
       else if ( (i==3) || (i==4) ) 
        {       
                   if ((i+1)%2==0)
                   { //empty = 'blackcells'
                   empty = (j+1)%2 !=0  ? 'blackcells' : 'whitecells'
                   }
                              
                  else 
                  {// empty = 'whitecells'
                    empty = (j+1)%2==0  ? 'blackcells' : 'whitecells'
                  }
             
        }
           
        else 
             {
              if ((j+1)%2==0)
              {
                empty = (j+1)%2!=0 ? 'blackcells': 'whitecells'
              }
              else {
                var back = (j+1)%2!=0 ? 'blackcells' :'whitecells';
                var ce =    i<3 ? 'red' : 'white'
                empty = [ce,back]  
              }    
             }  
        
        var pos = `${i} ${j}` 
        ar[pos]= empty
    }
}

//ar['0 2'][0] = null
temp = ['white','blackcells']
//console.log(ar['3 0']=temp)
var result =[]
for (let i=0;i<8;i++)
{   var temp = []
    
    for (let j =0;j<8;j++)
    
    {   var pos = `${i} ${j}`
        //temp.push(<div>ar</div>)
       if (ar[pos]!= 'blackcells' && ar[pos]!='whitecells') 
          { //console.log(ar[pos][0])
            if (ar[pos][0]!= null)
            { // console.log(`arthur ${ar[pos]}`)
            temp.push(
            
                <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ ar[pos][1] == 'blackcells' ? styles.blackcells : styles.whitecells  }  child={<Piece id={`${i+1} ${j+1}`} position={`${i+1} ${j+1}`} color={ar[pos][0]} ></Piece>} >  </Cell> )
              }

            else 
            {
              temp.push(
              <Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ ar[pos][1] == 'blackcells' ? styles.blackcells : styles.whitecells  }  >  </Cell> 
              )
            }
            //temp.push(<Pion color={ar[pos]} ></Pion>)
          }
       else temp.push(<Cell ke={`${i+1}${j+1}`} id={`c${i+1} ${j+1}`}  cls={ ar[pos] == 'blackcells' ? styles.blackcells : styles.whitecells  }  ></Cell>)
    }
    result.push(<div style={{width:'fit-content', display:'flex',flexDirection:'row',columnGap:'2px'}}> {temp} </div> )
}

export const experience_context = createContext()

export default function ExperienceContext({children})

{ 
  const [board,setboard] = useState(ar)
  const changeboard= ((newvalue)=> setboard((oldvalue)=>{
   // console.log(newvalue)
    return {...oldvalue,...newvalue}
  })  )

 //return <div></div> 
  
  return ( <experience_context.Provider value = {{board,changeboard}}>
          <>{children}</>
  </experience_context.Provider>
  
  )
}
