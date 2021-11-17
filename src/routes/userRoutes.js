const express =  require("express")
const userController = require("../controllers/userController")
const authMiddleware = require("../utils/AuthMiddleware")


const userRoutes = express.Router()

  const {
      signup,
      login,
      profileGet

  }= new userController();


  userRoutes.post("/signup",signup)
  userRoutes.post("/login",authMiddleware,login)
  userRoutes.get("/profile/:id",profileGet)

module.exports = userRoutes;    