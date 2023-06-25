import express from 'express'

const router = express.Router()

router.post('/login', async (request, response) => {
  console.log(request.body)
  response.json(request.body)
})

router.post('/signup', async (request, response) => {
  console.log(request.body)
  response.json(request.body)
})

export default router
