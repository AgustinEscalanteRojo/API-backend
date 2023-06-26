import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const ensureAuthenticated = async (request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(403).send({ message: 'You are not authenticated' })
  }

  const token = request.headers.authorization.split(' ')[1]
  if (!token) {
    return response.status(403).send({ message: 'You are not authenticated' })
  }

  const payload = jwt.decode(token, process.env.TOKEN_SECRET)

  if (!payload || !payload.id) {
    return response.status(403).send({ message: 'Wrong token' })
  }

  const user = await User.findOne({ _id: payload.id })

  if (!user) {
    return response.status(403).send({ message: 'Wrong token' })
  }

  request.user = user

  next()
}