import React, { createContext, useState } from 'react'

import { player } from '.'

export const turn_context = createContext()
export default function Turncontext({children}) {
  const [turn,setturn] = useState(player)
  const changeturn = (newturn)=> setturn(newturn)
  return  <turn_context.Provider value={{turn,changeturn}}> {children} </turn_context.Provider>
  
  
}
