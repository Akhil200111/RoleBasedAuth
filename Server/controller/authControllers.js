import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// REGISTER route
const register = async (req, res) => {
   
   try {
    const {username, password, role} = req.body

     const existingUser = await User.findOne({username})
     if(existingUser){
        return res.status(400).json({
            error: "User already existed...!"
        })
        console.log("User already existed");
     }
        
     const salt = await bcrypt.genSalt(10)
     const hasedPassword = await bcrypt.hash(password, salt);

     const newUser = new User({
        username,
        password: hasedPassword,
        role
     })
      await newUser.save()

      res.status(201).json({
        message: `User registerd successfully`,
        newUser
        
      })
   }catch (error) {
    res.status(500).json({
        error: "User Registration Failed..."  
    })
    console.log("User registration Failed",error); 
   }
}

// LOGIN route
const login = async (req, res) => {
  const {username, password} =req.body;

  if(!username || !password){
     return res.status(400).json({
      error: "Please provide Username and Password"
     })
  }

  const existingUser = await User.findOne({username})

  if(!existingUser){
   return res.status(401).json({
      error: "Invalid password or username"
   })
  }

  const matchPass = await bcrypt.compare(password, existingUser.password)

  if(!matchPass) {
    return res.status(400).json({
      error: "Invalid username or password"
   })
  }

  const token = jwt.sign(
   {
      id: existingUser._id,
      role: existingUser.role
   },
   process.env.JWT_SECRET,
   {
      expiresIn: "1h"
   }
);

res.cookie("jwt", token, {
   httpOnly: true,
   secure: false,
   sameSite: "lax",
   maxAge: 60 * 60 * 1000
})

res.status(200).json({
   message: "Login Successfull",
   token,
   user: {
      id: existingUser._id,
      username: existingUser.username,
      role: existingUser.role
   }
});
};




export {register,login}