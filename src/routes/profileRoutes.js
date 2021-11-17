const express = require("express");
const profileController= require("../controllers/profileController")
 const profileRouter = express.Router();


 const {
    editProfile,
 }= new profileController();

 profileRouter.patch("/ProfileUpdate/:id",editProfile);


 module.exports= profileRouter;

