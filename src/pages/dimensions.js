import React from 'react'

export var height_cell ="200px";

//export var reference = [1,2,3,4,5,6,7,8]

export   function possibility (player, position,id,board){
  //console.log(id)
  var to_be_deleted = []
  // get all the possibiles moves for a particular piece

  const result = []
 // console.log(id)
  
  var arthur = `${parseInt( id[0])-1} ${parseInt( id[2]) -1}` 
 // console.log(`${board[arthur]}`)
 if (id[0]!='k')
    { //if this piece is not a king it can move forward on the left or on the right 
         
            const [r,c] = position.toString().split(' ')
            const poss =[]
            let  temp1r = parseInt( r)  ,temp1c = parseInt (c), temp2c = parseInt( c);
        
        
        if ((board[arthur][0]== 'red' && player == 'player 2') || (board[arthur][0]== 'white' && player=='player 1'))
          // if (player=='player 1') 
      
            {  
              temp1r+=1
              temp1c-=1;
              temp2c+=1
            
              if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
              { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`
          
                if (board[test]=='blackcells'|| board[test][0]==null)  result.push( [position ,`c${parseInt( temp1r)} ${parseInt(temp1c)}`])         
                var test2 = `${temp1r } ${temp1c-2}`
                try{
                if ((board[test2][0]==null|| board[test2]=='blackcells') && (board[`${temp1r-1 } ${temp1c-1}`]!='blackcells' ) && (board[`${temp1r-1 } ${temp1c-1}`][0]!=null) && (board[`${temp1r-1 } ${temp1c-1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 
           
                 {
                  result.push([position, `c${temp1r+1} ${temp1c-1}`])     
                  //delete this piece
                  to_be_deleted .push( `${temp1r-1} ${temp1c-1}`)
                  //console.log(`${temp1r-1} ${temp1c-1}`)
                 }
                }
               catch(e){}

               var test3 = `${temp1r-4 } ${temp1c-2}`
              // console.log(`${temp1r-3 } ${temp1c-1}`)
               try
               {
               if ((board[test3][0]==null|| board[test3]=='blackcells') && (board[`${temp1r-3 } ${temp1c-1}`]!='blackcells' ) && (board[`${temp1r-3 } ${temp1c-1}`][0]!=null) && (board[`${temp1r-3 } ${temp1c-1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 
   
                   {
                     result.push([position, `c${temp1r-3} ${temp1c-1}`])     
                     //delete this piece
                     to_be_deleted.push( `${temp1r-3} ${temp1c-1}`)
                   
                   }
               }
               catch(e){}
               
         
              }
              //console.log(`${temp1r} ${temp2c}`) 
            //  console.log('er')
                
              if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
              { 
                var test  = `${parseInt( temp1r)-1 } ${parseInt( temp2c)-1}`
               
                if (board[test]=='blackcells' || board[test][0]==null)  result.push([position, `c${parseInt(temp1r)} ${temp2c}`])  
                var test2 = `${temp1r } ${temp2c}`
              //console.log(test2)
                try
                {
                if ((board[test2][0]==null|| board[test2]=='blackcells') && (board[`${temp1r-1 } ${temp2c-1}`]!='blackcells' ) && (board[`${temp1r-1 } ${temp2c-1}`][0]!=null) && (board[`${temp1r-1 } ${temp2c-1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 
  
                 {
                  result.push([position, `c${temp1r+1} ${temp2c+1}`])     
                  //delete this piece
                  to_be_deleted .push( `${temp1r-1} ${temp2c-1}`)
                  //console.log(`${temp1r-1} ${temp2c-1}`)
                 }
                }
                catch(e){}

                var test3 = `${temp1r-4 } ${temp1c+2}`
              // console.log(`${temp1r-3 } ${temp1c-1}`)
               try
               {
               if ((board[test3][0]==null|| board[test3]=='blackcells') && (board[`${temp1r-3 } ${temp1c+1}`]!='blackcells' ) && (board[`${temp1r-3 } ${temp1c+1}`][0]!=null) && (board[`${temp1r-3 } ${temp1c+1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 
   
                   {
                     result.push([position, `c${temp1r-3} ${temp2c+1}`])     
                     //delete this piece
                     to_be_deleted.push( `${temp1r-3} ${temp1c+1}`)
                   
                   }
               }
               catch(e){}
              
              }
              
            
            } 
            else
            { 
              temp1r-=1
              temp1c-=1;
              temp2c+=1
              
             
              if ((temp1r>=1 && temp1r<=8) && ((temp1c>=1 && temp1c<=8) ))  
              { var test  = `${parseInt( temp1r)-1 } ${parseInt( temp1c)-1}`
           
              if (board[test]=='blackcells'|| board[test][0]==null) 
                 { 
                   result.push([position, `c${temp1r} ${temp1c}`])      
                 }
                 
              var test2 = `${temp1r-2 } ${temp1c-2}`
              try
              {
              if ((board[test2][0]==null|| board[test2]=='blackcells') && (board[`${temp1r-1 } ${temp1c-1}`]!='blackcells' ) && (board[`${temp1r-1 } ${temp1c-1}`][0]!=null) && (board[`${temp1r-1 } ${temp1c-1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 

                  {
                    result.push([position, `c${temp1r-1} ${temp1c-1}`])     
                    //delete this piece
                    to_be_deleted.push( `${temp1r-1} ${temp1c-1}`)
                  }
              }
              catch(e){}
            
            var test3 = `${temp1r+2 } ${temp1c-2}`
            try
            {
            if ((board[test3][0]==null|| board[test3]=='blackcells') && (board[`${temp1r+1 } ${temp1c-1}`]!='blackcells' ) && (board[`${temp1r+1 } ${temp1c-1}`][0]!=null) && (board[`${temp1r+1 } ${temp1c-1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 

                {
                  result.push([position, `c${temp1r+3} ${temp1c-1}`])     
                  //delete this piece
                  to_be_deleted.push( `${temp1r+1} ${temp1c-1}`)
                }
            }
            catch(e){}
            }

            
              
              if (( (temp1r>=1 && temp1r<=8) && ((temp2c>=1 && temp2c<=8) )))
              {   var test  = `${ temp1r-1 } ${ temp2c-1}`
                  if (board[test]=='blackcells' || board[test][0]==null) result.push([position, `c${temp1r} ${temp2c}`])      
               
                  var test2 = `${temp1r-2 } ${ temp2c}`
                  try
                  { 
                      if ((board[test2][0]==null|| board[test2]=='blackcells') && (board[`${temp1r-1 } ${temp2c-1}`]!='blackcells' ) && (board[`${temp1r-1 } ${temp2c-1}`][0]!=null) && (board[`${temp1r-1 } ${temp2c-1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 

                      {
                        result.push([position, `c${temp1r-1} ${temp2c+1}`])  
                        
                        //delete this piece
                        to_be_deleted .push( `${temp1r-1} ${temp1c+1}`)
                      }
                      
                 }
                catch(e){}

                var test3 = `${temp1r+2 } ${temp1c+2}`
            try
            {
            if ((board[test3][0]==null|| board[test3]=='blackcells') && (board[`${temp1r+1 } ${temp1c+1}`]!='blackcells' ) && (board[`${temp1r+1 } ${temp1c+1}`][0]!=null) && (board[`${temp1r+1 } ${temp1c+1}`][0].replace('k','') != board[ `${parseInt( id[0])-1} ${parseInt( id[2])-1}` ][0] )) 

                {
                  result.push([position, `c${temp1r+3} ${temp2c+1}`])     
                  //delete this piece
                  to_be_deleted.push( `${temp1r+1} ${temp2c-1}`)
                }
            }
            catch(e){}
              }
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
   
    currentr-=1
    currentc-=1
    var test = `${parseInt( currentr)-1} ${parseInt( currentc)-1}` 
    
  
   try { 
   
    if (board[test][0] == null || board[test] == 'blackcells' )    result.push( [position, `c${currentr} ${currentc}`])
    
    else { 
          try
          { 

          if ( (board[`${currentr-2} ${currentc-2}`][0] == null || board[`${currentr-2} ${currentc-2}`] == 'blackcells') && ( board[ `${currentr-1} ${currentc-1}`][0]!=board[`${parseInt(id[1])-1} ${parseInt(id[3])-1}`][0].slice(1)))    
              {
                result.push( [position, `c${currentr-1} ${currentc-1}`])
                //delete this piece
                to_be_deleted .push( `${currentr-1} ${currentc-1}`)
                //console.log(`${currentr-1} ${currentc-1}`)
              }
          }
          catch(e) {}
          break
        }
      }
      catch(e){}

   }

   currentr = parseInt(id[1])
   currentc = parseInt(id[3])
  
    //going to north east
    while(currentr>=0 && currentc <=7)
    {
 
     currentr-=1
     currentc+=1
     var test = `${parseInt( currentr)-1} ${parseInt( currentc)-1}` 
  
   try
        {   
        if ( board[test][0] == null || board[test] == 'blackcells' )     result.push( [position, `c${currentr} ${currentc}`])
        else { 
        try
        {  
            if ( (board[`${currentr-2} ${currentc}`][0] == null || board[`${currentr-2} ${currentc}`] == 'blackcells') && ( board[ `${currentr-1} ${currentc+1}`][0]!=board[`${parseInt(id[1])-1} ${parseInt(id[3])-1}`][0].slice(1)))    
                {
                  result.push( [position, `c${currentr-1} ${currentc+1}`])     
                  //delete this piece
                  to_be_deleted .push( `${currentr-1} ${currentc-1}`) 
                  //console.log(`${currentr-1} ${currentc-1}`)
                }
        }
        catch(e) {}
        break;
      }
    }
    catch(e){}
    }

    currentr = parseInt(id[1])
    currentc = parseInt(id[3])

      //going to south east
      while(currentc<=7 && currentc <=7)
      {
      
       currentr+=1
       currentc+=1
     
       var test = `${parseInt( currentr)-1} ${parseInt( currentc)-1}` 
     try
          {  
          if ( board[test][0] == null || board[test] == 'blackcells' )    result.push( [position, `c${currentr} ${currentc}`])
          else 
          { try {

            if ( (board[`${currentr} ${currentc}`][0] == null || board[`${currentr} ${currentc}`] == 'blackcells') && ( board[ `${currentr-1} ${currentc-1}`][0]!=board[`${parseInt(id[1])-1} ${parseInt(id[3])-1}`][0].slice(1) ))    
               { 
                  result.push( [position, `c${currentr+1} ${currentc+1}`])
                   //delete this piece
                   to_be_deleted .push( `${currentr-1} ${currentc-1}`)
                  //console.log(`${currentr-1} ${currentc-1}`)
               }

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
      while(currentr<8 && currentc >0)
      {
      
       currentr+=1
       currentc-=1
       var test = `${parseInt( currentr)-1} ${parseInt( currentc)-1}` 
  
      try{ 
        if ( board[test][0] == null || board[test] == 'blackcells' )    result.push( [position, `c${currentr} ${currentc}`])
        else 
            { 
              try 
              {
                if ( (board[`${currentr} ${currentc-2}`][0] == null || board[`${currentr} ${currentc-2}`] == 'blackcells') && ( board[ `${currentr-1} ${currentc-1}`][0]!=board[`${parseInt(id[1])-1} ${parseInt(id[3])-1}`][0].slice(1) ))    
                      {
                        result.push( [position, `c${currentr+1} ${currentc-1}`])
                        
                        //delete this piece
                        to_be_deleted .push( `${currentr-1} ${currentc-1}`) 
                        //console.log(`${currentr-1} ${currentc-1}`)
               
                      }
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
  //console.log(to_be_deleted)
  
  return {'id':id,'position':position,'possibilities': [...result],'deleted':to_be_deleted};
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

export function remove_piece(funct,position)
{ 
  funct({[position]:[null,'whitecells']})
}

export function set_color(pos)
{
  for (let i = 0 ;i<pos.length;i++)
  {
    try 
    {
       const test1 = document.getElementById(pos[i][1])
       test1.style.backgroundColor='yellow'
    }
    catch(e)
    {
      
    }
    
  }
}