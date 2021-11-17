const { Sequelize, DataTypes } = require("sequelize");
const db = require("../dbConfig/config")
// const sequelize = new Sequelize("postgres::memory");

const user = db.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    CNIC: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false,
    },
  },
);
// console.log(user === db.models.User);
user.sync()
module.exports = user;
