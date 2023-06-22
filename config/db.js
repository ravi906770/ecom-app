import mongoose  from "mongoose";

const connection = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO)
        console.log(`Connected to mongodb ${conn.connection.host}`)
    } catch (error) {
        console.log(`error in mongodb ${error}`)
    }
}

export default connection;

