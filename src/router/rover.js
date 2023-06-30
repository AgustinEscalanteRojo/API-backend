import express from 'express'
import {
  createRover,
  getRoverById,
  updateRover,
  deleteRoverById,
} from '../controllers/rover.js'

const roverRouter = express.Router()

// Ruta para obtener un rover por ID
roverRouter.get('/:id', async (request, response) => {
  try {
    const result = await getRoverById(request.params.id) // Llama a la función getRoverById del controlador para obtener un rover por su ID
    response.json({ result })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
    response.status(500).json('Algo ha salido mal')
  }
})

// Ruta para crear un rover
roverRouter.post('/', async (request, response) => {
  try {
    console.log('entramos')
    const results = await createRover(request.body) // Llama a la función createRover del controlador para crear un nuevo rover utilizando los datos proporcionados en el cuerpo de la solicitud
    response.json(results)
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

// Ruta para actualizar un rover por ID
roverRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const results = await updateRover(request.params.id, request.body) // Llama a la función updateRover del controlador para actualizar un rover por su ID utilizando los datos proporcionados en el cuerpo de la solicitud
    response.json({ from: 'server', result: results }) // Envía los resultados como respuesta en formato JSON
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message) // Si el mensaje de error es "Not found", devuelve una respuesta con estado 404 y el mensaje de error
    }
  }
})

// Ruta para eliminar un rover por ID
roverRouter.delete('/:id', async (request, response) => {
  try {
    deleteRoverById(request.params.id) // Llama a la función deleteRoverById del controlador para eliminar un rover por su ID
    response.json({ delete: true }) // Envía una respuesta en formato JSON indicando que se ha eliminado el rover correctamente
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message) // Si el mensaje de error es "Not found", devuelve una respuesta con estado 404 y el mensaje de error
    }
  }
})

export default roverRouter
