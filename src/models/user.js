import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      lowerCase: true,
    },
    password: {
      type: String,
      require: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { collection: 'users' }
)

const User = mongoose.model('User', userSchema)

export default User
