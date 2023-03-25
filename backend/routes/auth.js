const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/createuser". No login required
router.post(
  '/api/auth/createuser',[
  body('username').isEmail(),
  body('password').isLength({ min: 8 }),],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check weather the user already exists
    let user = await User.findOne({username: req.body.username});
    if(user){
      return res.status(400).json({error: "Sorry user with this email already exists."})
    }

    user = await User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(user => res.json(user));
  }
);

module.exports = router;