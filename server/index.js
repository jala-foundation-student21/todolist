const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:1q2w3e4r@cluster0.zusmqjz.mongodb.net/')

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running");
})
