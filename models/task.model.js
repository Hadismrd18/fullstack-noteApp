const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "task title is required"],
    maxlength: [20, "task title shouldnt exceed 20 characters"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
    maxlength: [200, "description shouldnt exceed 200 characters"],
  },
  completed: {
    type: Boolean,
  },
  important: {
    type: Boolean,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
  dirId: {
    type: Schema.Types.ObjectId,
    ref: "directories",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const taskModel = model("task", taskSchema);

module.exports = taskModel;
