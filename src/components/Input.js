import React, { useContext, useState } from "react";

import {NoteContext} from '../context/Todo'


function Input(){
  
    const [text , setText] = useContext(NoteContext)

    function obj(){
        let te = document.getElementById('text').value
        return{text: te, id: Math.random()*1000, state: false}
    }

    function add(){
     
        let te = document.getElementById('text')
        
        if(te.value === ""){
            return
        }
       
        setText([...text, obj()])

        te.value = ""

    }

    return (
        <div className="input-container">
            <input type='text' id="text"></input>
            <button onClick={add}>ADICIONAR</button>
        </div>
    )

}

export default Input