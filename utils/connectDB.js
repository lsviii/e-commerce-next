import mongoose from 'mongoose';

const connectDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('Conexão já existe.')
        return
    }

    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log("Conectado ao mongodb!")
    })

}

export default connectDB;