import React, { useState } from 'react'

import { createContext } from 'react'

export const context = createContext()
export default function Context({children}) {
    const [possibilities,setPossibilities] = useState([])
    const changepossibilities = (newvalue)=> 
    {   //console.log(newvalue)
      return  setPossibilities([...newvalue])
      
    }
    
  return (
    <context.Provider value={{possibilities,changepossibilities}} >  
       
        {children}
      
    </context.Provider>
    
  )
}
