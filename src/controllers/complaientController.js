const Complaint = require("../models/complaintsModel");
const User = require("../models/User")
const baseController = require("../utils/baseController");

class complaientController extends baseController {
  constructor() {
    super();
  }

  complaint = async (req, res) => {
    try {
      const { title, description, attatchment } = req.body;
      console.log(req.body)
      const result = await Complaint.create({
        title,
        description,
        attatchment,
      });

      return res.status(200).json({
        message: "successfuly file complaint",
        result,
      });
    } catch (error) {
        console.log(error.message,error)
      return res.status(400).json({
        message: "unable to complaint",
      });
    }
  };
}

module.exports = complaientController;
