const Complaint = require("../models/complaintsModel");
const User = require("../models/User")
const baseController = require("../utils/baseController");

class complaientController extends baseController {
  constructor() {
    super();
  }
  // fileComplaint method
  complaint = async (req, res) => {
    try {
      const { title, description, attatchment,UserId } = req.body;
      console.log(req.body)
      const result = await Complaint.create({
        title,
        description,
        attatchment,
        UserId

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

  // view all complaint

  viewAll =  async (req,res)=>{
    try {
      
      const result = await Complaint.findAll({
        where:{
          UserId:req.params.id
        }
      })
      return res.status(200).json({
        message:"getting all users",
        result,
      })

    } catch (error) {
      console.log(error.message,error);
      return res.status(400).json({
        message:"cant view complaints"
      })
    }
  }




}

module.exports = complaientController;
