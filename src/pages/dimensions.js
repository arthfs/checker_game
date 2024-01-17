import React from 'react'

export var height_cell ="200px";
export var ref = [1,2,3,4,5,6,7,8]



export  function possibility (player, position,id){
  //console.log(position)
  const [r,c] = position.toString().split(' ')
  const poss =[]
  let  temp1r = parseInt( r)  ,temp1c = parseInt (c), temp2c = parseInt( c);
  const result = []
 // console.log(position)
  if (player=='player 1') 
  {
    temp1r +=1
    temp1c-=1;

    temp2c+=1
    if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
    {
      result.push( [position ,`c${temp1r} ${temp1c}`])      
    }
    
    if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
    {
      result.push([position, `c${temp1r} ${temp2c}`])      
    }
    
   
  }
  else
  {
    temp1r -=1
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
 // console.log(`result ${result}`)
  
  return {'id':id,'position':position,'possibilities': [...result]};
}

export function move(idsource,idtarget)
{
 // console.log('clicked')
}

export default function Dimensions() {
  return (
    <div>dimensions</div>
  )
}
