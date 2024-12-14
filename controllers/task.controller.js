const taskModel = require("../models/task.model");

const createNewTask = async (req, res) => {
  try {
    const data = req.body;
    const result = await taskModel.create(data);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const result = await taskModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await taskModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskModel.findOneAndDelete({ _id: id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { createNewTask, getAllTasks, updateOneTask, deleteOneTask };
