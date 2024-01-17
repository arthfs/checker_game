import Cell from './cell'
import Piece from './piece'
import Pion from './pion'
import React from 'react'
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
temp = [null,'blackcells']
console.log(ar['0 1']=temp)
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
            
                <Cell cls={ ar[pos][1] == 'blackcells' ? styles.blackcells : styles.whitecells  } id={'er'} child={<Pion color={ar[pos][0]} ></Pion>} >  </Cell>
            
                      )
              }

            else 
            {
              temp.push(
              <Cell cls={ ar[pos][1] == 'blackcells' ? styles.blackcells : styles.whitecells  } id={'er'}  >  </Cell> 
              )
            }
            //temp.push(<Pion color={ar[pos]} ></Pion>)
          }
       else temp.push(<Cell cls={ ar[pos] == 'blackcells' ? styles.blackcells : styles.whitecells  } id={'er'} ></Cell>)
    }
    result.push(<div style={{width:'fit-content', display:'flex',flexDirection:'row',columnGap:'2px'}}> {temp} </div> )
}
console.log(result[0])
export default function Experience() {
  return (

    <> 
      <div className={styles.title}>     experience </div> 
      <div className={styles.arthur}>
    
      <div className={styles.board}>
      {
        result.map ((e)=>{return e})
      }
      </div>
          
      </div>
    </>
  )
}
