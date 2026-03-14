import express from "express";
import dotenv from 'dotenv'
import mongoDBConnect from "./config/db.js";
import User from "./models/User.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(express.json());

// MongoDb Connection
mongoDBConnect();

// Routes
app.use('/api', authRoutes)
app.use('/api/user', userRoutes)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})