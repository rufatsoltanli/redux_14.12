import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToTodo, removeFromTodo } from './todoSlice'
import { v4 as uuidv4 } from 'uuid';


export function Todo() {
    const todo = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()
    const [inp, setInp] = useState('')
    console.log(todo);

    return (
        <div className='todo'>
            <h1>Todo List</h1>
            <input type="text" name="" id="" value={inp} onChange={(e) => { setInp(e.target.value) }} />
            <button onClick={() => dispatch(addToTodo({ text: inp, id: uuidv4() }))}>add to list</button>
            <ul>
                {todo.map((x) => (<li onClick={() => dispatch(removeFromTodo(x.id))}>{x.text}</li>))}
            </ul>
        </div>
    )
}