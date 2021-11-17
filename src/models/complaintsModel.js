const { Sequelize, DataTypes } = require("sequelize");
const User = require("../models/User")
const db = require("../dbConfig/config")
// const sequelize = new Sequelize("postgres::memory");

const complaint = db.define(
  "Complaint",
  {
    // Model attributes are defined here
   title : {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    attachment : {
        type:DataTypes.BLOB,
    }
  },
);
User.hasMany(complaint);
complaint.sync();

module.exports = complaint;
