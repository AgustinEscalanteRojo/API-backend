import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
  {
    name: {
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
  },
  { collection: 'users' }
)

const User = mongoose.model('User', UserSchema)

export default User
