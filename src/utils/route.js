const userRout =  require("../routes/userRoutes");
const profileRout = require("../routes/profileRoutes");
const complaientRout = require("../routes/compliantsRoutes");



const express = require("express");

const router = express.Router();


router.use("/user",userRout);
router.use("/profile",profileRout);
router.use("/complaient",complaientRout);



module.exports = router