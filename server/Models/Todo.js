const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    deadline: String,
    category: String,
    status: {
        type: String,
        default: 'unfinished',
    },
    note: String,
    description: String
})

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoSchema;