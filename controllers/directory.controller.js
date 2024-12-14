const dirModel = require("../models/directory.model");
const taskModel = require("../models/task.model");
const createNewDirectory = async (req, res) => {
  try {
    const data = req.body;
    const newDir = dirModel.create(data);
    res.status(200).send(newDir);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllDirectories = async (req, res) => {
  try {
    const result = await dirModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateOneDirectory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await dirModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteOneDirectory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dirModel.findOneAndDelete({ _id: id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getATaskByDirectory = async (req, res) => {
  try {
    const { dirId } = req.params;
    const result = await taskModel.find({ dirId });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createNewDirectory,
  getAllDirectories,
  updateOneDirectory,
  deleteOneDirectory,
  getATaskByDirectory,
};
