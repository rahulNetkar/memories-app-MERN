import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Connection from './components/db';

const app = express();
const PORT = 1337;
app.use(cors())
Connection();

















app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`)
})