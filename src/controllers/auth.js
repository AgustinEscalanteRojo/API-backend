import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/**
 * @param {string} email
 * @param {string} password
 * @return {Promise<string>}
 */

const saltRounds = 10

export const signup = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Miss some fields')
  }

  const hasUser = await User.findOne({ email })
  if (hasUser) {
    throw new Error('Email is used')
  }
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt) // salt
  const user = new User({ email, password: hashedPassword, salt })
  await user.save()
  return jwt.sign({ email: user.email }, process.env.TOKEN_SECRET)
}

// id: user._id

/**
 * @param {string} email
 * @param {string} password
 * @return {Promise<string>}
 */

export const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Miss some fields')
  }
  const hasUser = await User.findOne({ email })
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('User not found')
  }

  const matchedPassword = await bcrypt.compare(password, user.password)

  if (!matchedPassword) {
    throw new Error('invalid password')
  }
  return jwt.sign({ email, id: user._id }, process.env.TOKEN_SECRET)
}
