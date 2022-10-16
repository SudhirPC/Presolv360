const express = require("express");
const router = express.Router();
const PostTask= require("../model/task.model.js");
const User=require("../model/auth.model.js")

router.post("/:id", async (req, res) => {
  console.log("body")
  console.log(req.body)
  try {
    const data = await User.findById(req.params.id)
    console.log("data",data)
    await data.updateOne({$push:{task:req.body}})
    res.status(200).json("task added");
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.get("/:value", async (req, res) => {
  console.log(req.params.value, "hello2");
  try {
    const Data = await PostTask.find({ title: req.params.value });
    console.log(Data, "hello3");
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.patch("/:id/update", async (req, res) => {

  try {

    const currentUser = await User.findById(req.params.id)
    console.log(currentUser.task,'current')

    await User.update( {_id : req.params.id , "task.id" : req.body.id } , 
    {$set : {"task.$.statustask" : req.body.status} } );
    res.status(200).json("Task has been updated successfully")

  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
