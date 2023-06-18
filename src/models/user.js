import mongoose from 'mongoose'
const moment = require('moment');
require('moment-timezone');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    plate: { type: String, required: true, unique: true},
    entryTime: { type: Date, default: moment().tz('America/Sao_Paulo'), required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema) // se tiver o modelo usuário retorna esse modelo, senão,
//retorna um modelo novo