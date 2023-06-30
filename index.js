import express from 'express'
import bodyParser from 'body-parser'
import authRouter from './src/router/auth.js'
import roverRouter from './src/router/rover.js'
import connectToDb from './src/services/db.js'
import dotenv from 'dotenv'
import { ensureAuthenticated } from './src/middelware/auth.js'

dotenv.config()

const startApp = async () => {
  const app = express()
  const port = 8080

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.use(ensureAuthenticated)

  app.use('/auth', authRouter)
  app.use('/rovers', roverRouter)

  try {
    await connectToDb()
    app.listen(port, () => {
      console.log(`Server start in ${port} port`)
    })
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

startApp()
