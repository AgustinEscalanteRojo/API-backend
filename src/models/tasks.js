import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const Task = mongoose.model('Tasks', taskSchema)

export default Task 
