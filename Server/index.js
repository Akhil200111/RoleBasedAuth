import express from "express";
import dotenv from 'dotenv'
import mongoDBConnect from "./config/db";

dotenv.config();
const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(express.json());

// MongoDb Connection
mongoDBConnect();

// Routes






// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})