import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/**
 * @param {string} email
 * @param {string} password
 * @return {Promise<string>}
 */

export const login = async ({ email: string, password: string }) => {
  if (!email || !password)  {
    throw new Error('Miss some fields')
  }
  const hasUser = await User.findeOne({ email })

  if (!user) {
    throw new Error('User not found')
  }

  const matchedPassword = await bcrypt.compare(password, user.password)

  if (!matchedPassword) {
    throw new Error('invalid password')
  }
  return jwt.sign({ email, id: user._id }, process.env.TOKEN_SECRET)
}

/**
 * @param {string} email
 * @param {string} password
 * @return {Promise<string>}
 */

export const signup = async ({ email, password }) => {
  if (!email || !password)  {
    throw new Error('Miss some fields')
  }

  const hasUser = await User.findeOne({ email })
  if (hasUser) {
    throw new Error('Email is used')
  }
  const hashedPassword = await bcrypt.hash(password, 'sha256')  // sha256 hash of password  hash for   password hashing algorithm and password hashing algorithm
  const user = new User({ email, password: hashedPassword })
  await user.save()
  return jwt.sign({ email, id: user._id }, process.env.TOKEN_SECRET)
}
