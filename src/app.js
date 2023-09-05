const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Student = require("./models/students");
require("./db/connection");
app.use(express.json());

//create a new student using promise
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(401).send(e);
//     });
//   // res.send("hello")
// });

//create a new student using async await
app.post('/students',async (req,res)=>{
    try{
        const user =new Student(req.body);
        const createUser =await user.save();
        res.status(201).send(createUser);
    } catch(e){res.status(400).send(e);}
})

app.get('/students',async(req,res)=>{
    try{
     const studentsData=  await  Student.find();
     res.send(studentsData)
    }
    catch(e){ 
        res.send(e)
    }

})
app.get('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
       const studentData=await Student.findById(_id)
       if(!studentData){
        return res.status(404).send();
       }else{
        res.send(studentData);
       }
      
    }
    catch(e){
        res.status(500).send(e)
    }
})
 

app.listen(port, () => {
  console.log(`connection is stablish at ${port}`);
});
