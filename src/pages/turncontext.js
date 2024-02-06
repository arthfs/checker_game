import React, { createContext, useState } from 'react'

export const turn_context = createContext()
export default function Turncontext({children}) {
  const [turn,setturn] = useState('player 1')
  const changeturn = (newturn)=> setturn(newturn)
  return  <turn_context.Provider value={{turn,changeturn}}> {children} </turn_context.Provider>
  
  
}
