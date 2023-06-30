import Rover from '../models/rover.js'

/**
 * Get all rovers.
 *
 * @returns {Promise<object[]>}
 */
export const getRovers = async () => {
  return Rover.find()
}

/**
 * Obtener un rover por su ID.
 *
 * @param {string} id
 * @returns {Promise<object>}
 * @throws {Error}
 */
export const getRoverById = async (id) => {
  const rover = await Rover.findOne({ _id: id })

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
export const createRover = async ({
  idNasa,
  cameraName,
  img_src,
  earth_date,
}) => {
  const rover = new Rover({ idNasa, cameraName, img_src, earth_date })
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
  return Rover.findByIdAndUpdate(id, data, { new: true })
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
