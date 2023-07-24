const express = require("express")
const router = new express.Router()
const employeeController = require("../controller/controller")

router.route("/employees").get(employeeController.fetchEmployees)
router.route("/employees").post(employeeController.addNewEmployees)
router.route("/employees/:id").put(employeeController.updateEmployees)

module.exports = router;