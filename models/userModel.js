import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  nome: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  role: {
    type: String, 
    default: 'user'
  },
  root: {
    type: Boolean, 
    default: false
  }
}, {
  timestamps: true
})

// let Dataset = mongoose.model.user || mongoose.model('user', userSchema)
let Dataset = mongoose.models.user || mongoose.model('user', userSchema)

export default Dataset