const express = require("express");
const { registerUser,authUser } = require("../controlers/userControlers");

const router = express.Router();

router.route("/").post(registerUser);
router.route('/login',authUser)

module.exports = router;
