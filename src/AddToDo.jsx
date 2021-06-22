import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addTodos, deleteTodo, removeTodo } from "./action"
import './App.css'


function AddToDo() {
    const [todo, setTodo] = useState([""])
    const items = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const savedItems = (e) => {
        e.preventDefault()
        dispatch(addTodos(todo))
        setTodo("");
    }
    console.log(items)
    console.log(todo)
    return (
        <div>
            <form className="formu">
                <h1>Add to list</h1>
                <input className="inputBox" type="text" value={todo} placeholder="Add new item" onChange={(e)=>setTodo(e.target.value)} />
                <button className="AddBtn" onClick={savedItems}>Add</button>
            </form>
            {items.map((elem) => (
            <div className="eachItem" key={elem.id}>
                <li>{elem.data}
                <button className="DelBtn" onClick={()=>dispatch(deleteTodo(elem.id))}> Delete </button></li>
            </div>
            ))}

            <div>
              <button className="RemBtn" onClick={()=>dispatch(removeTodo())}>Remove All</button>
            </div>

        </div>
    )
}
export default AddToDo
