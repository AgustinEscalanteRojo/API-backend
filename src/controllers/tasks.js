/**
 * @param {string} id 
 * @returns {{name: string, id: string}}
 */

export const getTasksById = (id) => {
  /***Logic */

  return {
    id,
    name: 'test',
  }
}

/**
 * @param {object} data 
 * @param {string} data.name 
 * @returns {*{id}}
 */

export const createTasks = (data) => {
    /***Logic */
  
    return {
      id,
      name: 'test',
    }
  }

/**
 * @param {string} id 
 * @param {object} data
 * @returns {*{id}}
 */

export const updateTasks = (id, data) => {
    /***Logic */
  
    return {
      id,
      ...data,
    }
  }

/**
 * @param {string} id 
 * @returns {boolean}
 */

export const removeTasksById = (id) => {
    /***Logic */
  
    return true
  }