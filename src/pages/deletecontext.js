import React, { createContext, useState } from 'react'

export const delcontext = createContext()
export default function Deletecontext({children}) {

    const [deletedpiece,set_delete_piece] = useState("arthur")
   const change_deleted_piece=(newvalue) =>{
        set_delete_piece(newvalue)
    }
  return (
    <delcontext.Provider value={{deletedpiece,change_deleted_piece}}>
        {children}
    </delcontext.Provider>
  )
}
