const express = require("express");
const ShiftController = require("../controllers/shifts");
const router = express.Router();

router.get("", ShiftController.getShifts)
router.post("", ShiftController.createShift)
router.put("/:id", ShiftController.updateShift)

module.exports = router;
