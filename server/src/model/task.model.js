const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    
    taskname: { type: String, required: true },
    description: { type: String, required: true },
    developer: { type: String, required: true },
    deadline: { type: Date, required: true },
    statustask: { type: Boolean,  required: false },
  },
  { versionKey: false, timestamps: true }
);
//  const Task = new mongoose.model("Task", taskSchema);

module.exports = mongoose.model("taskSchema", taskSchema);
