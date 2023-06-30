import express from 'express'
import { login, signup } from '../controllers/auth.js'
import { getRover } from '../services/rover.js'

const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const token = await login(request.body)
    response.json(token)
  } catch (e) {
    response.status(500).json(e.message)
  }
})

router.post('/signup', async (request, response) => {
  try {
    const token = await signup(request.body)
    response.json(token)
  } catch (e) {
    response.status(500).json(e.message)
  }
})

router.get('/syncRover', async (request, response) => {
  try {
    const result = await getRover()

    response.json({ result })
  } catch (e) {
    if (e.message === 'Not found') {
      response.status(404).json(e.message)
    }
  }
})

export default router
