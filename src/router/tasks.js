import express from 'express'
import {
  createTask,
  getTasks,
  getTasksById,
  removeTasksById,
  updateTask,
} from '../../src/controllers/tasks.js'

const router = express.Router()

router.get('/', async (request, response) => {
  const tasks = await getTasks()

  response.json({ tasks })
})

router.get('/:id', async (request, response) => {
  try {
    const task = await getTasksById(request.params.id)
    response.json({ task })
  } catch (e) {
    if (e.message === 'Task not found') {
      response.status(404).json(e.message)
    }

    response.status(500).json('Algo ha salido mal')
  }
})

router.post('/', async (request, response) => {
  const createTask = await createTask(request.body)
  response.json({ task: createTask })
})

router.put('/:id', async (request, response) => {
  const updatedTask = await updateTask(request.params.id, request.body)
  response.json({ from: 'server', task: updatedTask })
})

router.delete('/:id', (request, response) => {
  removeTasksById(request.params.id)
  response.json({ removed: true })
})

export default router