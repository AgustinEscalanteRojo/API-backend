import express from 'express'
import {
  createRover,
  getRoverById,
  updateRover,
  deleteRoverById,
} from '../controllers/rover.js'

const roverRouter = express.Router()

roverRouter.get('/:id', async (request, response) => {
  try {
    const result = await getRoverById(request.params.id)
    response.json({ result })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
    response.status(500).json('Algo ha salido mal')
  }
})

roverRouter.post('/', async (request, response) => {
  try {
    console.log('entramos')
    const results = await createRover(request.body)
    response.json(results)
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

roverRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const results = await updateRover(request.params.id, request.body)
    response.json({ from: 'server', result: results })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

roverRouter.delete('/:id', async (request, response) => {
  try {
    deleteRoverById(request.params.id)
    response.json({ delete: true })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

export default roverRouter
