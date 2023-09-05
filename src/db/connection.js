const mongoose = require("mongoose");

const DB=`mongodb+srv://deepak:deepak@cluster0.yhubpbs.mongodb.net/student?retryWrites=true&w=majority`
mongoose.connect(DB).then(()=>{
    console.log("connection is successful")
}).catch((e)=>{
    console.log(e,"not connected")
})



