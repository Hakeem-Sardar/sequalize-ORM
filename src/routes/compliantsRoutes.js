const express = require("express");
const complaientController = require("../controllers/complaientController")

const complaientRoutes = express.Router();
const {
    complaint,
    viewAll,
 }=new complaientController;


 complaientRoutes.post("/fileComplaint",complaint)

 complaientRoutes.get("/userComplaients/:id",viewAll)















module.exports = complaientRoutes;