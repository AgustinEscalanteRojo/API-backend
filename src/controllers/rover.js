import Rover from '../models/rover.js'

/**
 * Obtener un rover por su ID.
 *
 * @param {string} id 
 * @returns {Promise<object>} 
 * @throws {Error} 
 */
export const getRoverById = async (id) => {
  const rover = await Rover.findOne(id)

  if (!rover) {
    throw new Error('Rover not found')
  }

  return rover
}

/**
 * Crear un nuevo rover.
 *
 * @param {object} data 
 * @returns {Promise<object>} 
 */
export const createRover = async ({ idNasa, camera, img_src, earth_date }) => {
  const rover = new Rover({ idNasa, camera, img_src, earth_date })
  return rover.save()
}

/**
 * Actualizar un rover existente por su ID.
 *
 * @param {string} id 
 * @param {object} data 
 * @returns {Promise<object>} 
 */
export const updateRover = async (id, data) => {
  const result = await Rover.findByIdAndUpdate(id, data, { new: true })

  return result
}

/**
 * Eliminar un rover por su ID.
 *
 * @param {string} id 
 * @returns {Promise<boolean>} 
 */
export const deleteRoverById = async (id) => {
  await Rover.findByIdAndDelete(id)
  return true
}
