const userModel = require("../models/user.model");
const taskModel = require("../models/task.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createNewUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = { username, email, password: hashedPassword };
    const result = await userModel.create(data);
    res.status(201).json({
      message: "User registered successfully. Please Verify Email",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userModel.find({});
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    const result = await userModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userModel.findOneAndDelete({ _id: id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getTaskByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await taskModel.find({ userId });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists:
    const currentUser = await userModel.findOne({ email });
    if (!currentUser) {
      res.status(404).json({ message: "hadis not found!!" });
    }
    // check if password is correct
    const currentUserPassword = currentUser.password;
    const passwordIsCorrect = await bcrypt.compare(
      password,
      currentUserPassword
    );
    if (!passwordIsCorrect) {
      return res.status(401).json({ error: "Authentication failed" });

    }
    // generate token
    const SECRET_KEY = process.env.SECRET_KEY;
    const userId = currentUser._id;
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "30m" });

    res.status(200).send(token);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  createNewUser,
  getAllUsers,
  updateOneUser,
  deleteOneUser,
  getTaskByUser,
  loginUser
};
