import express from 'express'
import {
  createNasa,
  getNasaById,
  getNasaRovers,
  updateNasa,
  deleteNasaById,
} from '../../src/controllers/controllerNasa.js'
const routerNasa = express.Router()
//TODO: falta importar el servicio de API Nasa
//TODO: falta importar los controladores de la NASA

routerNasa.get('/', async (request, response) => {
  try {
    const result = await getNasaRovers()

    response.json({ result })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

routerNasa.get('/:id', async (request, response) => {
  try {
    const result = await getNasaById(request.params.id)
    response.json({ result })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
    response.status(500).json('Algo ha salido mal')
  }
})

routerNasa.post('/', async (request, response) => {
  try {
    const results = await createNasa(request.body)
    response.json({ result: results })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

routerNasa.put('/:id', async (request, response) => {
  try {
    const results = await updateNasa(request.params.id, request.body)
    response.json({ from: 'server', result: results })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

routerNasa.delete('/:id', async (request, response) => {
  try {
    deleteNasaById(request.params.id)
    response.json({ delete: true })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

export default routerNasa
