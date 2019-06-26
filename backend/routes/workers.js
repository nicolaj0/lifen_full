const express = require("express");
const WorkerController = require("../controllers/workers");
const router = express.Router();

router.post("", WorkerController.createWorker);
router.put("/:id", WorkerController.putWorker);
router.delete("/:id", WorkerController.deleteWorker)
router.post("/:id/shifts", WorkerController.postShiftsForWorker);
router.get("/:id/shifts", WorkerController.getShiftsFoWorker);
router.get("", WorkerController.getWorkers)

module.exports = router;
