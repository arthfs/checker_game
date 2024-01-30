import React from 'react'

export var height_cell ="200px";

//export var reference = [1,2,3,4,5,6,7,8]

export   function possibility (player, position,id,board){
   
  // get all the possibiles moves for a particular piece
  const result = []
  var arthur = `${parseInt( id[0])-1} ${parseInt( id[2]) -1}` 
  console.log(`${board[ arthur][0]}`)
 if (id[0]!='k')
    { //if this piece is not a king it can move forward on the left or on the right 
          try{
            const [r,c] = position.toString().split(' ')
            const poss =[]
            let  temp1r = parseInt( r)  ,temp1c = parseInt (c), temp2c = parseInt( c);
          

           // console.log(board['5 6'])
          //  if (parseInt(id[0])<4)
        if (!(board[arthur][0]=='red' && player == 'player 1'))
          // if (player=='player 1') 
            { 
              temp1r+=1
              temp1c-=1;

              temp2c+=1
              if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
              { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`
          
                if (board[test]=='blackcells'|| board[test][0]==null)   result.push( [position ,`c${parseInt( temp1r)} ${parseInt(temp1c)}`])      
              }
              
              if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
              { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp2c)-1}`
            
                if (board[test]=='blackcells' || board[test][0]==null)  result.push([position, `c${parseInt(temp1r)} ${temp2c}`])      
              }
              
            
            } 
            else
            { //console.log(position)
             //console.log(`${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`)
            //  console.log(`${board[`${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`]}`)
              temp1r-=1
              temp1c-=1;

              temp2c+=1
              if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
              { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`
            // console.log(`position ${position} test ${test}`)
              if (board[test]=='blackcells'|| board[test][0]==null) 
              { 
                result.push([position, `c${temp1r} ${temp1c}`])      
            }
              }
              
              if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
              { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp2c)-1}`
            
              if (board[test]=='blackcells' || board[test][0]==null) result.push([position, `c${temp1r} ${temp2c}`])      
              }
            }

            
           }

            catch(e) 
            {
              
            }
    }
  else 
  {
    // The piece is a king, it can move to all the four diagonals 
   var currentr = parseInt(id[1])
   var currentc = parseInt(id[3])

   //going to north west
   while(currentr>0 && currentc >0)
   {
    //console.log(`${currentr} ${currentc}`)
    currentr-=1
    currentc-=1
    if (board[`${currentr} ${currentc}`][0] == null)    result.push( [id, `c${currentr+1} ${currentc+1}`])
    else {
          try
          { 
            
           // console.log(`${parseInt(id[1])} ${parseInt(id[3])} ${board[kingid][0].slice(1)}`)
          // console.log(`${board[`${currentr} ${currentc}`][0]}`)
            if (board[`${currentr-1} ${currentc-1}`][0] == null && (board[`${currentr} ${currentc}`][0] != board[`${parseInt(id[1])} ${parseInt(id[3])}`][0].slice(1) ) )    result.push( [id, `c${currentr} ${currentc}`])
    
          }
          catch(e) {}
          break
        }
   //   result.push( [id, `c${currentr+1} ${currentc+1}`])
    
   }

   currentr = parseInt(id[1])
   currentc = parseInt(id[3])
  
    //going to north east
    while(currentr>0 && currentc <7)
    {
    // console.log(`${currentr} ${currentc}`)
     currentr-=1
     currentc+=1
   //  console.log(board[`${currentr} ${currentc}`])
   try{   if ( board[`${currentr} ${currentc}`][0] == null || board[`${currentr} ${currentc}`] == 'blackcells' )     result.push( [id, `c${currentr+1} ${currentc+1}`])
      else {
        try{  if ( board[`${currentr-1} ${currentc+1}`][0] == null || board[`${currentr-1} ${currentc+1}`] == 'blackcells' && (board[`${currentr} ${currentc}`][0] != board[`${parseInt(id[1])} ${parseInt(id[3])}`][0].slice(1) ) )     result.push( [id, `c${currentr} ${currentc+2}`])
      }
        catch(e) 
        {}
        break;
      }
    }
    catch(e){}
    }

    currentr = parseInt(id[1])
    currentc = parseInt(id[3])

      //going to south east
      while(currentc<7 && currentc <7)
      {
      
       currentr+=1
       currentc+=1
       //console.log(`${currentr} ${currentc}`)
     try{  if ( board[`${currentr} ${currentc}`][0] == null || board[`${currentr} ${currentc}`] == 'blackcells' )    result.push( [id, `c${currentr+1} ${currentc+1}`])
          else 
          { try {
            if ( board[`${currentr+1} ${currentc+1}`][0] == null || board[`${currentr+1} ${currentc+1}`] == 'blackcells' && (board[`${currentr} ${currentc}`][0] != board[`${parseInt(id[1])} ${parseInt(id[3])}`][0].slice(1) ) )    result.push( [id, `c${currentr+2} ${currentc+2}`])

          }
          catch(e) {}
          break;
        }
      }
      catch(e){}
    
      }

      currentr = parseInt(id[1])
      currentc = parseInt(id[3])
     
      //going to south west
      while(currentr<8 && currentc >=0)
      {
      
       currentr+=1
       currentc-=1
     //  console.log(`${currentr} ${currentc} ${board[`${currentr} ${currentc}`][0]}`)
      try{ 
        if ( board[`${currentr} ${currentc}`][0] == null || board[`${currentr} ${currentc}`] == 'blackcells' )    result.push( [id, `c${currentr+1} ${currentc+1}`])
        else 
            {
              try {
                if ( board[`${currentr+1} ${currentc-1}`][0] == null || board[`${currentr+1} ${currentc-1}`] == 'blackcells' && (board[`${currentr} ${currentc}`][0] != board[`${parseInt(id[1])} ${parseInt(id[3])}`][0].slice(1) ))    result.push( [id, `c${currentr+2} ${currentc}`])
              }
              catch(e) {
                
              }
            break
            }
      }
      catch(e) {
        //console.log(currentr)
      }
    
      }

      currentr = parseInt(id[1])
      currentc = parseInt(id[3])
      
   
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
