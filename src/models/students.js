const mongoose =require("mongoose");
const valdator=require("validator");


const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already exists"],
        ValidityState(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number ,
        // min:10,
        // max:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,

    }
})

const Student=new mongoose.model('list',studentSchema)

module.exports=Student