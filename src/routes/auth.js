const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { signup, signin } = require("../controllers/auth");
const {
  validate,
  isResultValid,
  validateSigninRequest,
} = require("../validator/auth");


router.post("/signup", validate, isResultValid, signup);
router.post("/signin", validateSigninRequest, isResultValid, signin);
module.exports = router;
