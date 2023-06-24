import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({info: 'hola mundo'})
})

app.get('/tasks', (request, response) => {
    // FLUJO DE LOGICA

    const tasks = [
       {name: 'TV'}, 
       {name: 'SALON'}, 
       {name: 'CAR'},
    ]
    
    response.json({tasks})
})

app.get('/tasks/:id', (request, response) => {
    response.json(ID: request.params.id)
})

app.post('/tasks', (request, response) => {
    response.json(...request.body, from: 'server')
})



app.listen(port, () => {
    console.log(`Server start in ${port} port`) 
})