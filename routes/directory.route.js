const { Router } = require("express");

const {
  createNewDirectory,
  getAllDirectories,
  updateOneDirectory,
  deleteOneDirectory,
  getATaskByDirectory,
} = require("../controllers/directory.controller");

const router = Router();

router.post("/", createNewDirectory);

router.get("/", getAllDirectories);

router.put("/:id", updateOneDirectory);

router.delete("/:id", deleteOneDirectory);

router.get("/:dirId/tasks", getATaskByDirectory);
module.exports = router;
