import Data from '../models/nasa.js'

const getApiNasa = async () => {
  try {
    console.log('llamada API')

    const response = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' +
        process.env.APIKEY
    )
    const nasaList = await response.json()

    const roverPhoto = nasaList.photos

    const newList = roverPhoto.map((rover) => ({
      idNasa: rover.id,
      camera: rover.camera,
      img_src: rover.img_src,
      earth_date: rover.earth_date,
    }))

    const nasaCreate = []
    const existedNasas = await Data.find()

    for (const item of newList) {
      const existed = existedNasas.find(
        (existedNasa) => existedNasa.idNasa === item.idNasa
      )
      if (!existed) {
        nasaCreate.push(item)
      }
    }
    if (nasaCreate.length > 0) {
      Data.insertMany(nasaCreate)

      return 'DATOS SINCRONIZADOS Y GUARDADOS'
    }

    return 'NO HAY DATOS NUEVOS PARA GUARDAR'
  } catch (error) {}
}

export default getApiNasa
