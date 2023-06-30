import mongoose from 'mongoose'

// Función para establecer la conexión con la base de datos
const connectToDb = async () => {
  console.log('Start DB connection..')

  // Establecer la conexión con la base de datos MongoDB
  await mongoose.connect('mongodb://localhost:27017/agustin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connected to DB')
}

export default connectToDb
