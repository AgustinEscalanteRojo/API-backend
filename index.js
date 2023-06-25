import express from 'express'
import bodyParser from 'body-parser'
import taskRouter from './src/router/tasks.js'
import connectToDB from './src/services/db'

const startApp = async () => {
  const app = express()
  const port = 8080

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.get('/', (request, response) => {
    response.json({ info: 'hola mundo' })
  })

  app.use('/tasks', taskRouter)

  try {
    await connectToDB()
    app.listen(port, () => {
      console.log(`Server start in ${port} port`)
    })
  } catch (e) {
    console.log(e)
    procces.exit(1)
  }
}

startApp()
