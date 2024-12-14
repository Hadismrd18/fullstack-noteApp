const { Router } = require("express");
const router = Router();

const {
  createNewUser,
  getAllUsers,
  updateOneUser,
  deleteOneUser,
  getTaskByUser,
  loginUser,
} = require("../controllers/user.controller");

router.post("/", createNewUser);
router.get("/", getAllUsers);
router.put("/:id", updateOneUser);
router.delete("/:id", deleteOneUser);
router.get("/:userId/tasks", getTaskByUser);
router.post("/login", loginUser);
module.exports = router;
