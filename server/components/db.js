import mongoose from "mongoose";

const Connection = () => {
    try {
        mongoose.connect('mongodb+srv://admin:pass123@memories-app.vnjqt.mongodb.net/memories-app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connected successfuly")
    } catch (error) {
        console.log(`Error ${error}`)
    }
}

export default Connection;