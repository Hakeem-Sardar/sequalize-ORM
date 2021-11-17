const role = require("../models/role")
const user= require("../models/User")
const profile = require("../models/profileModel")
const db= require("../dbConfig/config");


  module.exports= 
   
  // user.hasOne(role);
  
  
  db.sync({force:true}).then((result)=>{
      console.log(result);
  }).catch((err)=>{
      console.log(err);
  })