const Sequalize = require("sequelize");
require("dotenv").config()

module.exports = new Sequalize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    HOST:process.env.HOST,
    dialect:process.env.DIALECT,
    // logging:false

})


