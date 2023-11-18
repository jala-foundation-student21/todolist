import React, { useState, useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    })

    const handleEdit = (id) => {
        console.log(id)
    }

    const handleDelete = (id) => {
        console.log(id)
    }
  return (
    <div className='home'>
      <h1>Todo List</h1>
      <Create />
      {
        todos.length === 0
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            <div className='task'>
                <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                    {todo.done ?
                         < BsFillCheckCircleFill className="icon" />
                         : <BsCircleFill classNam="icon" />
                    }
                    <p className={todo.status == 'finished' ? "line_through" : ""}>{todo.task}</p>
                </div>
                <div>
                    <span><BsFillTrashFill className='icon'
                    onClick={() => handleDelete(todo._id)}/></span>
                </div>
            </div>
        ))
        
      }
    </div>
  )
}

export default Home