const express = require("express");
const ShiftController = require("../controllers/shifts");
const router = express.Router();

router.get("", ShiftController.getShifts)
router.post("", ShiftController.createShift)

module.exports = router;
