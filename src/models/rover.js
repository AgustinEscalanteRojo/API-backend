import mongoose from 'mongoose'

const roverSchema = new mongoose.Schema(
  {
    idNasa: {
      type: Number,
      required: true,
    },
    cameraName: {
      type: String,
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

// Creación del modelo "Rover" utilizando el esquema
const Rover = mongoose.model('Rover', roverSchema)

export default Rover
