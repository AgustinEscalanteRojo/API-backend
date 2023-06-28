import Data from '../../src/models/nasa.js'

export const getNasaRovers = async () => {
  return await Data.find()
}

export const getNasaById = async () => {
  const rover = await Data.findOne(idNasa)

  if (!rover) {
    throw new Error('Rover not found')
  }

  return rover
}
export const createNasa = async ({ idNasa, camera, img_src, earth_date }) => {
  const rover = new Data(idNasa, camera, img_src, earth_date)

  return rover.save()
}

export const updateNasa = async (id, data) => {
  const result = await Data.findOneAndUpdate(id, data, { new: true })

  return result
}

export const deleteNasaById = async (id) => {
  await Data.findByIdAndDelete(id)
  return true
}
