import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => { 
    let token
    let authHeader = req.headers.Authorization || req.headers.authorization

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        
    if(!token) {
       return res.status(403).json({
            message: "No authorized token available"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user =decode
        // console.log("The decode user is: ", req.user);
        next()
    } catch (error) {
        res.status(400).json({
            error: "Token is not valid or expired"
        })
    }
    }
    else{
        return   res.status(403).json({
            message: "No authorized token available"
        })
    }

}

export default verifyToken