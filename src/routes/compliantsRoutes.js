const express = require("express");
const complaientController = require("../controllers/complaientController")

const complaientRoutes = express.Router();
const {
    complaint,
    getComplaints,
 }=new complaientController;


 complaientRoutes.post("/fileComplaint",complaint)















module.exports = complaientRoutes;