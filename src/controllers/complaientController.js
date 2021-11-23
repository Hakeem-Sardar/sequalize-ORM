// const complaint = require("../models/complaintsModel");
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
  //  getting all complaints 

  GetAll = async (req,res)=>{
    try {
      const result = await Complaint.findAll();
      console.log(result[1])
      return res.status(200).json({
        message:"getting all Complaints",
        result
      })
    } catch (error) {
      console.log(error.message,error)
      return res.status(400).json({
        message:"unable to get all Complaints"
      })
      
    }
  }

  // update Complaint method 

  updateCom = async (req, res) => {
    try {
      const {title,description,attachment,UserId}= req.body
      const result = await Complaint.update(
        {
          title,
          description,
          attachment,
          UserId
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

        return res.status(200).json({
          message:"profile updated successfully",
          result
        })

    } catch (error) {
      console.log(error.message, error);
      return res.status(400).json({
        message: "unable to update try again",
      });
    }
  };



}

module.exports = complaientController;
