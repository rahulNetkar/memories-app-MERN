import mongoose from "mongoose";

const Connection = () => {
    try {
        mongoose.connect("")
        console.log('Database connected successfuly')
    } catch (error) {
        console.log(`Error ${error}`)
    }
}

export default Connection;