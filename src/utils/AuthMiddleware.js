const jwt = require("jsonwebtoken");
const User = require("../models/User");
const httpStatus = require("http-codes");
const user = require("../models/User");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader.replace("Bearer ", "");
    try {
      const authData = jwt.verify(req.token, process.env.PRIVATE_KEY);
      console.log(authData)
      const data = authData.user.id;
      console.log(data);
      if (authData) {
        const query = await User.findAll({
          where:{
            Id: data
          }
        })
        console.log(query)
        if (query.length > 0) {
          // const user = query[0];
          // delete user["password"];
          if (user) {
            req.user = user;
          } else {
            return res.status(httpStatus.UNAUTHORIZED).json({
              error: "User not found",
              status: 0,
            });
          }
          next();
        }
      }
    } catch (error) {
      console.log(error.message,error)
      return res.status(httpStatus.UNAUTHORIZED).json({
        error,
      });
    }
  }
};
module.exports = authenticate;
