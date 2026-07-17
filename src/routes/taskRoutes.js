const express = require("express");

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  patchTask,
  deleteTask,
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all task routes
router.use(authMiddleware);

router
  .route("/")
  .get(getAllTasks)
  .post(createTask);

router
  .route("/:id")
  .get(getTaskById)
  .put(updateTask)
  .patch(patchTask)
  .delete(deleteTask);

module.exports = router;