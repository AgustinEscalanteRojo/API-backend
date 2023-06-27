import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({

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
})

const Data = mongoose.model('Data', dataSchema)

export default Data
