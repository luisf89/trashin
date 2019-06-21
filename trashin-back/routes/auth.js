const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/User')
const uploader = require("../helpers/multer")

router.post('/register', (req, res, next) => {
  let {password, passwordConfirm} = req.body;

  if(password !== passwordConfirm){
    return res.status(500).json({
      error:{},
      message: "Contraseñas no coinciden"
    })
  } 
  const salt = bcrypt.genSaltSync(10)
  const hasshedPassword = bcrypt.hashSync(req.body.password, salt)
  User.create({ ...req.body, password: hasshedPassword })
    .then(user => {
      jwt.sign(
        { id: user._id },
        process.env.SECRET,
        {
          expiresIn: 86400
        },
        (err, token) => {
          // if (err) throw err;
          delete user._doc.password
          res.status(200).json({ token, user })
        }
      )
    })
    .catch(error => {
     error.action = "Error while creating user";
      next(error);
    })
})

router.post('/login', (req, res, next) => {
    console.log('asdasdasdasdasd',req.body)
  const { email, password } = req.body
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({
        error: {},
        message: 'Email incorrecto'
      })
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)
    if (!passwordIsValid) {
      return res.status(401).json({
        error: {},
        message: 'Contraseña incorrecta'
      })
    }

    jwt.sign(
      { id: user._id },
      process.env.SECRET,
      {
        expiresIn: 86400
      },
      (err, token) => {
        // if (err) throw err;
        delete user._doc.password
        res.status(200).json({ token, user })
      }
    )
  }).catch(error => {
    error.action = "Error while login user";
     next(error);
   })
})

router.patch('/:id/edit' ,uploader.single('image'),(req,res, next)=> {
  let {id}= req.params
  let user = req.body

  if(req.file){
    const image = req.file.secure_url
    user.image = image
    //user['image']
  }
 
User.findByIdAndUpdate({_id:id},{ $set: {...user} }, { new: true }).then(user=>
  res.status(200).json({
    user
    })
  ).catch(error => {
    error.action = "Error while updating user";
     next(error);
  })
})

module.exports = router