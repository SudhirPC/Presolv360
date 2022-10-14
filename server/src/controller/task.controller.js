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
    const taskobj = new PostTask({
      taskname:req.body.taskname,
      description:req.body.description,
      developer:req.body.developer,
      deadline:req.body.deadline,
      statustask:req.body.statustask

    })
    taskobj.save((err) => {
      if (err) {
        console.log("eeeee")
        res.send(err)
      } else {
        console.log("yes")
        res.send({ message: 'Successfully Created' })
      }
    })
    await data.updateOne({$push:{task:taskobj}})
    res.status(200).json(data);
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
// router.patch("/:value", async (req, res) => {
//   console.log(req.params.value, "patch");
//   try {
//     const Data = await PostTask.update({'items.id': 2}, {'$set': {
//       'items.$.name': 'updated item2',
//       'items.$.value': 'two updated'
//   }},
    
//   // PostTask.findByIdAndUpdate(req.params.id,{$set:req.body});
//     console.log(Data, "hello3")
//     res.status(200).json(Data);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
module.exports = router;
