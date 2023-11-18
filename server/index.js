const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:1q2w3e4r@cluster0.zusmqjz.mongodb.net/jalasoftdevtest')

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const { task, deadline, category, note, description } = req.body;
    TodoModel.create({ 
        task: task,
        deadline: deadline,
        category: category,
        note: note,
        description: description 
    })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log("server is running");
})
