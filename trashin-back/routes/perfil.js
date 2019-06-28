const User = require("../models/User")
const express = require("express");
const router = express.Router();
const authUtils = require("../helpers/auth");

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  let  user  = req.body;

  console.log(req.body)
  //const { _id: author } = req.user;
  console.log("user", user)

  User.findByIdAndUpdate({ _id: id}, { $set: {...user} }, { new: true })
  .then(user => {
    res.status(200).json({ user });
  })
  .catch(error => {
    res.status(500).json({
      error,
      message: "No puedes editar",
    });
  });
})

module.exports = router
