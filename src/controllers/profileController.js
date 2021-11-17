
const Profile =  require("../models/profileModel");
const baseController = require("../utils/baseController");


class profileController extends baseController{
    constructor(){
        super()
    };
    // profile edit method
   editProfile = async (req,res)=>{
       try {
           const profile = await Profile.update({
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            picture:req.body.pic

        },{
            where: {
                UserId:req.params.id
            }
        })
           return res.status(200).json({
               message:"user updated succesfuly",
               result:profile
           })
           
       } catch (error) {
           return res.status(401).json({
               message:"unable to update profile"
           })
       }

   }









}



module.exports =profileController;