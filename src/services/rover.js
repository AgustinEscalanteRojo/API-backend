import Rover from '../models/rover.js'

export const getRover = async () => {
  try {
    console.log('call to API')

    const response = await fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' +
        process.env.APIKEY
    )
    const roverList = await response.json()

    const roverPhoto = roverList.photos

    const newList = roverPhoto.map((rover) => ({
      idNasa: rover.id,
      camera: rover.camera,
      img_src: rover.img_src,
      earth_date: rover.earth_date,
    }))

    const roverCreate = []
    const existedRovers = await Rover.find()

    for (const item of newList) {
      const existed = existedRovers.find(
        (existedRover) => existedRover.idNasa === item.idNasa
      )
      if (!existed) {
        roverCreate.push(item)
      }
    }
    if (roverCreate.length > 0) {
      Rover.insertMany(roverCreate)

      return roverCreate
    }

    return 'Dont have any data for safe'
  } catch (error) {}
}
