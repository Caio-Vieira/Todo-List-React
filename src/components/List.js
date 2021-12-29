import React, { useContext, useState } from "react";
import { NoteContext } from '../context/Todo'


function List() {

    const [text, setText] = useContext(NoteContext)

    function changeState(id) {

        let teste = text.map((item) => {

            if (item.id === id) {
                item.state = !item.state
            }
            return item
        })
        setText(teste)
    }

    function Done(props) {

        console.log(props);
        
     if(props.state){
         return(
             <img alt="check box" src="./checkBox.png"></img>
         )
     }
     else{
        return (

            <img alt="empty box" src="./emptyBox.png"></img>
            )
     }
    }

    function deleteItem(props) {

        let t = text.filter((item)=> item.id !== props.id)
      
        setText(t)
    }

    return (

        <ul>
            {text.map((item) =>
                <li key={item.id} className="list-item"> {item.text}
                <div>
                    <button onClick={() => {changeState(item.id)}}><Done state={item.state}></Done></button>
                    <button onClick={() => {deleteItem(item)}}><img alt="trash" src="./trash.png"></img></button>
                </div>
                </li>
            )}
        </ul>
    )

}

export default List