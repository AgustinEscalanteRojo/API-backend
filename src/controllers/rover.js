import Rover from '../models/rover.js'

export const getRoverById = async (id) => {
  const rover = await Rover.findOne(id)

  if (!rover) {
    throw new Error('Rover not found')
  }

  return rover
}

export const createRover = async ({ idNasa, camera, img_src, earth_date }) => {
  const rover = new Rover({ idNasa, camera, img_src, earth_date })
  return rover.save()
}

export const updateRover = async (id, data) => {
  const result = await Rover.findByIdAndUpdate(id, data, { new: true })

  return result
}

export const deleteRoverById = async (id) => {
  await Rover.findByIdAndDelete(id)
  return true
}
