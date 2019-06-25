const express = require("express");
const ShiftController = require("../controllers/shifts");
const router = express.Router();

router.get("", ShiftController.getShifts)

module.exports = router;
