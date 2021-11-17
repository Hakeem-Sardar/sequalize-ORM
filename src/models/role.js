const { Sequelize, DataTypes } = require("sequelize");
const User = require("../models/User")
const db = require("../dbConfig/config");
const role = db.define("Role", {
  role: {
    type: DataTypes.STRING,
    defaultValue: "Reporter",
  },
});

role.sync();
User.hasOne(role);

module.exports = role;
