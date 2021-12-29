import React, { useState, createContext } from "react";

export const NoteContext = createContext()

export function NoteProvider(props){

    const[text, setText] = useState([])
  
    return(

        <NoteContext.Provider value={[text, setText]}>

            {props.children}

        </NoteContext.Provider>

    )

}