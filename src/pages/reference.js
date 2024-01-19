import React, { createContext, useState } from 'react'

var test = {}
for (let i=1 ;i<=8;i++)
{
    for (let j =1;j<=8;j++)
    {
        test[`${i} ${j}`] =  `${i} ${j}`
    }
}



export const reference = createContext()
export default function Reference({children}) {

 const [ref,setref]= useState(test)
 const changeref = (newvalue)=> {
  setref( (oldvalue) =>({...oldvalue,...newvalue}))
}
  return (
    <reference.Provider value={{ref,changeref}}>
       <>
       {children}
       </>
    </reference.Provider>
  )
}
