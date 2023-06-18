import mongoose from 'mongoose';
require('dotenv').config();
const databaseConnection = async () => {
  try {
    const URI = process.env.MONGODB_URI;
    if (!URI) {
      throw new Error('A variável de ambiente MONGODB_URI não foi configurada.');
    }
    if (!global.mongoose) {
      mongoose.set('strictQuery', false);
      global.mongoose = await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error);
  }
};

export default databaseConnection;