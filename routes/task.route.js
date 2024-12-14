const { Router } = require("express");
const router = Router();

const {
  createNewTask,
  getAllTasks,
  updateOneTask,
  deleteOneTask,
} = require("../controllers/task.controller");

router.post("/", createNewTask);

router.get("/", getAllTasks);

router.put("/:id", updateOneTask);

router.delete("/:id", deleteOneTask);
module.exports = router;
