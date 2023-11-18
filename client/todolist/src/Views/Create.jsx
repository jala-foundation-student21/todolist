import React, { useState } from 'react'
import axios from 'axios';

function Create() {
    const [task, setTask] = useState();
    const [deadline, setDeadline] = useState();
    const [category, setCategory] = useState();
    const [note, setNote] = useState();
    const [description, setDescription] = useState();

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {
            task: task,
            deadline: deadline,
            category: category,
            note: note,
            description: description
        })
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
        <div className='InputBox'>
            <label htmlFor="taskInput">New Task:</label>
            <input type="text" id='taskInput' placeholder='Enter your task' onChange={(e) => setTask(e.target.value)}/>
        </div>
        
        <div className="input_box">
            <label htmlFor="deadlineInput">Choose your deadline:</label>
            <input type="text" id='deadlineInput' placeholder='mm/dd/yy' onChange={(e) => setDeadline(e.target.value)}/>   
        </div>

        <div className="input_box">
            <label htmlFor="categoryInput">Choose a category:</label>
            <input type="text" id='categoryInput' placeholder='Ex: Work' onChange={(e) => setCategory(e.target.value)}/>
        </div>

        <div className="input_box">
            <label htmlFor="noteInput">New Task</label>
            <input type="text" id='noteInput' placeholder='Add anote (optional)' onChange={(e) => setNote(e.target.value)}/>
        </div>

        <div className="input_box">
            <label htmlFor="descInput">New Task</label>
            <input type="text" id='descInput' placeholder='Add a description (optional)' onChange={(e) => setDescription(e.target.value)}/>
        </div>
            
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
