import Task from '../models/task.js'

/**
 * @param {string} id 
 * @returns {{name: string, id: string},}
 */

export const getTasksById = async () => {
  const task = await Task.findOne({_id: id})

  if (!task) {
    throw new Error('Task not found')
  }

  return task 

}

/**
 * @returns {[{name: string}, {name: string}, {name: string}]}
 */

export const getTasks = async () => {
  return Task.find()
}

/**
 * @param {object} data 
 * @param {string} data.name 
 * @returns {*}
 */

export const createTasks = async ({ name }) => {
    const task = new Task( name )
  
    return task.save()
  }

/**
 * @param {string} id 
 * @param {object} data
 * @returns {*&{id}}
 */

export const updateTasks = async (id, data) => {
    await Task.findOneAndUpadte({_id, id}, data)

    return getTasksById(id)
  }

/**
 * @param {string} id 
 * @returns {boolean}
 */

export const removeTasksById = async (id) => {
    await Task.deleteOne({_id, id},)
    return true
  }