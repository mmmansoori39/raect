import React, { useState } from "react";
// import Button from '@mui/material/Button';
import Items from "./Items";

function ToDoList(){
    const [data, setdata]= useState();
    const [item, setitem]= useState([])

    const inpvalue= (e) =>{
        setdata(e.target.value)
    }

    const addItem= () =>{
        if(!data) return;
        setitem((olditem) =>{
            return [...olditem, data]
        })
        setdata('');
        console.log(item)
    }
    const deleteItem= (id) =>{
        console.log('deleted')
        setitem((olditem)=>{
            return olditem.filter((arr, index)=>{
                return index !== id;
            })
        })
    }

    return(
        <div className="maindiv">
                <h2>ToDoList</h2>
            <div className="todo_main">
                <input type="text" placeholder="Add an Item" onChange={inpvalue} value={data} />
                <button onClick={addItem}>+</button>
            </div>
            {
                item.map((value, index) =>{
                    return(
                        <Items datavalue={value} onSelect={deleteItem} key={index} id={index} />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;