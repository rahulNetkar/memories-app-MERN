import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import Connection from './components/db.js';

//components import
import postRoutes from './routes/posts.js';

const app = express();

app.use('/post', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
Connection();
















const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Express server started on port ${Port}`)
})