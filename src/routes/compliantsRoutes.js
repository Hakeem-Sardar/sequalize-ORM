const express = require("express");
const complaientController = require("../controllers/complaientController");

const complaientRoutes = express.Router();
const { complaint, viewAll, GetAll, updateCom } = new complaientController();

complaientRoutes.post("/fileComplaint", complaint);

complaientRoutes.get("/userComplaients/:id", viewAll);

complaientRoutes.get("/getAll", GetAll);
complaientRoutes.patch("/updatecom/:id",updateCom);

module.exports = complaientRoutes;
