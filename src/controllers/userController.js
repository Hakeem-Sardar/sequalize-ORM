const baseController = require("../utils/baseController");
const User = require("../models/User");
const Role = require("../models/role");
const Profile = require("../models/profileModel");
const jwt = require("jsonwebtoken");
const { hash } = require("bcrypt");
const profile = require("../models/profileModel");
require("dotenv").config();
// User.hasOne(Role);

class userController extends baseController {
  constructor() {
    super();
  }
  //   user signup method
  signup = async (req, res) => {
    try {
      const { password } = req.body;
      const hashPassword = await hash(password, 10);
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        CNIC: req.body.CNIC,
        password: hashPassword,
      });
      const role = await user.createRole({
        role: req.body.role,
      });
      const profile = await user.createProfile({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });

      const token = jwt.sign({ user }, process.env.PRIVATE_KEY);
      console.log(token);
      return res.status(200).json({
        message: "successfuly added ROle and user",
        token,
        user,
        role,
        profile,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "unable to sign up",
      });
    }
  };

  // user login method

  login = async (req, res) => {
    try {
    } catch (error) {
      console.log(error.message, error);
    }
  };

  // complete users  profile view

  profileGet = async (req, res) => {
    try {
      const profile = await Profile.findAll({
        where: {
          UserId: req.params.id,
        },
      });
      return res.status(200).json({
        message: `profile found with UserId:${req.params.id}`,
        profile,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        message: "profile not fount with the given id",
      });
    }
  };

  // update profile method

  
}

module.exports = userController;
