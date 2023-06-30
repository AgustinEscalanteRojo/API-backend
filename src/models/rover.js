import mongoose from 'mongoose'

const roverSchema = new mongoose.Schema(
  {
    idNasa: {
      type: Number,
      required: true,
    },
    camera: {
      name: String,
    },
    img_src: {
      type: String,
    },
    earth_date: {
      type: String,
    },
  },
  { collection: 'rovers' }
)

const Rover = mongoose.model('Rover', roverSchema)

export default Rover
