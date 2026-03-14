import express from "express";
import verifyToken from "../middlewares/authMiddleware.js";
import authorizeRole from "../middlewares/roleMiddleware.js";
const router = express.Router()



// Only admin can access this route

router.get('/admin',verifyToken,authorizeRole("admin"), (req, res) => {
    res.json({ message: "Admin only can Access route"})
})

// Both admin and manager can access this route

router.get('/manager',verifyToken,authorizeRole("admin","manager") , (req, res) => {
    res.json({ message: "Admin and manager can Access route"})
})

// All can access this route

router.get('/user',verifyToken,authorizeRole("admin","manager","user"), (req, res) => {
    res.json({ message: "Anyone can Access route"})
})

export default router