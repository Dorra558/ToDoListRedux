import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addTodos,deleteTodo,removeTodo} from "./action"


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
            <form>
                <input type="text" value={todo} placeholder="add to list" onChange={(e)=>setTodo(e.target.value)} />
                <button onClick={savedItems}>Add</button>
            </form>
            {items.map((elem) => (
            <div className="eachItem" key={elem.id}>
                <li>{elem.data}</li>
                <button onClick={()=>dispatch(deleteTodo(elem.id))}>Delete</button>
            </div>
            ))}

            <div>
              <button onClick={()=>dispatch(removeTodo())}>Remove All</button>
            </div>

        </div>
    )
}

export default AddToDo
