import jwt from  "jsonwebtoken"
import userModels from "../models/userModels.js";

export const requireSignIn= async(req,res,next)=>{
    try {
        const decode =   jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        console.log(req.user)
         req.user=decode
        next()

    } catch (error) {
        console.log(error);
    }
}

//admin acceess
export const isAdmin = async (req, res, next) => {
    try {
      const user = await userModels.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };