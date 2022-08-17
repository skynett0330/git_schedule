const express = require("express");
const router = express.Router();
const pool = require("../database/database");
const userController = require('../controllers/userController')
const {eAdmin} = require('../helpers/eAdmin')


//   user/
router.get("/userView",userController.userView)

module.exports = router