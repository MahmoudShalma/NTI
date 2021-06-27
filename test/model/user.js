const mongoose = require("mongoose");

const UserScheama = mongoose.Schema({
    userName : {
        type : String,
        required : true,
    },
    userMail :{
        type : String,
        required : true,
    }
})


module.exports=mongoose.model('User',UserScheama);