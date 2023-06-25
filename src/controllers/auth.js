import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

/**
 * @param {string} email
 * @param {string} password
 * @return {Promise<string>}
 */

export const login = ({ email, password }) => {}

/**
 * @param {string} email
 * @param {string} password
 */

export const signup = async ({ email, password }) => {
  const hasUser = await User.findeOne({ email })
  if (hasUser) {
    throw new Error('Email is used')
  }
  const hashedPassword = await bcrypt.hash(password)
  const user = new User({email, password: hashedPassword})
  await user.save()
  const token = await jwt.sign({email}, process.env.TOKEN_SECRET)

}
