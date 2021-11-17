const { Sequelize, DataTypes } = require("sequelize");
const User = require("../models/User")
const db = require("../dbConfig/config")
// const sequelize = new Sequelize("postgres::memory");

const profile = db.define(
  "Profile",
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
    picture : {
        type:DataTypes.BLOB,
    }
  },
);
profile.sync();
User.hasOne(profile);

module.exports = profile;
