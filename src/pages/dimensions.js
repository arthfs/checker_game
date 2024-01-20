import React from 'react'
import { useContext } from 'react'

export var height_cell ="200px";
export var ref = [1,2,3,4,5,6,7,8]

export   function possibility (player, position,id,board){
 
 
  const [r,c] = position.toString().split(' ')
  const poss =[]
  let  temp1r = parseInt( r)  ,temp1c = parseInt (c), temp2c = parseInt( c);
  const result = []

      
  if (player=='player 1') 
  { 
    temp1r+=1
    temp1c-=1;

    temp2c+=1
    if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
    { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`
 
       if (board[test]=='blackcells'|| board[test][0]==null)   result.push( [position ,`c${temp1r} ${temp1c}`])      
    }
    
    if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
    { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp2c)-1}`
   
      if (board[test]=='blackcells' || board[test][0]==null)  result.push([position, `c${temp1r} ${temp2c}`])      
    }
    
   
  } 
  else
  {
    temp1r-=1
    temp1c-=1;

    temp2c+=1
    if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
    {
      result.push([position, `c${temp1r} ${temp1c}`])      
    }
    
    if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
    {
      result.push([position, `c${temp1r} ${temp2c}`])      
    }
  }

  
  return {'id':id,'position':position,'possibilities': [...result]};
}

export function move(idsource,idtarget)
{
 // console.log('clicked')
}

export function clear_cell_color(id)
{
 
  if (typeof(id)=='string')
      {
      var oldstyle = document.getElementById('c1 2')
      document.getElementById(id ).style = oldstyle
      }

      else 
      {
      for (let i =0;i<id.length;i++)
              {
              for (let j =0;j<id[i][2].length;j++)
              {
               // console.log(id[i][2][j][1])
               // document.getElementById(id[i][1][j][1]).style=oldstyle
               document.getElementById(id[i][2][j][1]).style=oldstyle
              }
      }
}


}
export default function Dimensions() {


  return (
    <div>dimensions</div>
  )
}
