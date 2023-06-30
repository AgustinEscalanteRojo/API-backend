import Rover from '../models/rover.js'
import fetch from 'node-fetch'

// Función para obtener datos del rover desde la API de la NASA y guardarlos en la base de datos
export const getRover = async () => {
  console.log('call to API')

  // Realizar una llamada a la API de la NASA para obtener los datos del rover Curiosity
  const response = await fetch(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' +
      process.env.APIKEY
  )
  const roverList = await response.json()

  const roverPhoto = roverList.photos

  // Transformar los datos obtenidos en un nuevo formato deseado
  const newList = roverPhoto.map((rover) => ({
    idNasa: rover.id,
    cameraName: rover.camera.name || '',
    img_src: rover.img_src,
    earth_date: rover.earth_date,
  }))

  const roverCreate = [] // Lista de nuevos rovers a crear
  const existedRovers = await Rover.find() // Obtener los rovers ya existentes en la base de datos

  // Verificar si cada rover de la lista nueva ya existe en la base de datos
  for (const item of newList) {
    const existed = existedRovers.find(
      (existedRover) => existedRover.idNasa === item.idNasa
    )
    if (!existed) {
      roverCreate.push(item) // Agregar los rovers nuevos a la lista de creación
    }
  }

  // Si hay rovers nuevos para crear, se insertan en la base de datos
  if (roverCreate.length > 0) {
    await Rover.insertMany(roverCreate)

    return roverCreate // Devolver la lista de rovers creados
  }

  return 'Dont have any data for safe'
}
