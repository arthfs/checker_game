import Cell from './cell'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
var re=[1,2,3,4,5,6]



var arthur = []

for ( let i =0; i<8;i++)
{ var temp =[ ]
  
  for ( let j = 0;j<8;j++)
  {
    if ((i+1)%2!=0 && (i!=4) && (i!=5)) 
    {
         
            if ((j+1)%2==0)
            {
              temp.push(   <div key={`${i+1}${j+1}`} className={ (j+1)%2==0 ? styles.blackcells : styles.whitecells}>
                <Cell color={ i<3? "red" :'white'} id={`!${i+1}${j+1}`} ></Cell>
              </div>) 
            }
            else {
               temp.push (   <div key={`${i+1}${j+1}`} className={ (j+1)%2==0 ? styles.blackcells : styles.whitecells}>
             
            </div>) 
            }    
      
    }
   else if ( (i==3) || (i==4) ) 
    {       
               if ((i+1)%2==0)
               {
                temp.push(   <div key={`${i+1}${j+1}`} className={ (j+1)%2!=0  ? styles.blackcells : styles.whitecells}> </div> )

               }
                          
              else 
              {
                temp.push(   <div key={`${i+1}${j+1}`} className={ (j+1)%2==0  ? styles.blackcells : styles.whitecells}> </div> )

              }
         
    }
       
    else 
         {
          if ((j+1)%2==0)
          {
            temp.push(   <div key={`${i+1}${j+1}`} className={ (j+1)%2!=0 ? styles.blackcells : styles.whitecells}>
             
            </div>) 
          }
          else {
             temp.push (   <div key={`${i+1}${j+1}`} className={ (j+1)%2!=0 ? styles.blackcells : styles.whitecells}>
            <Cell color={ i<3? "red" :'white'} id={`!${i+1}${j+1}`} ></Cell>
          </div>) 
          }    
         }  
    
  }
  arthur.push( <div key= {`row ${i+1}`}  style={{backgroundColor:"red",display:"flex",flexDirection:"row"}}> {temp}</div>  )
  
}


export default function Home() {
  
  return (
    <div>
      <div className={styles.title}>Checkers game</div>
                               
                
                     
                      
         <div className={styles.arthur}>
                          <div className={styles.board}>
                          { 
                            arthur.map((e)=>{ 
                              return  e
                              })
                              
                          }
                      </div>
            </div>
                  
    </div>
  );
}

