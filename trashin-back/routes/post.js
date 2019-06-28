const Post = require("../models/Post")
const Comment = require("../models/Comentarios")
const express = require("express");
const router = express.Router();
const authUtils = require("../helpers/auth");
const uploader = require("../helpers/multer");

router.post('/posting', (req, res) =>{
  let {post} = req.body;

  Post.create({...req.body})
  .then(post => {
        res.status(200).json({ post })
      }
    ).catch(error => {
      res.status(404).json({
        error,
        message: "Error al buscar el post",
      });
    });
})

// get post
router.get('/postMyPosts:/:id', authUtils.verifyToken, (req, res) =>{
  const {id} = req.params;
  Post.find({ author: id })
  .then(post =>{
    res.status(200).json({ post });
  })
  .catch(error => {
    res.status(500).json({
      error,
      message: "Error al buscar los posts",
    });
  });
});

router.get("/getAllPosts", (req, res) => {


  Post.find().populate()
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(error => {
      res.status(404).json({
        error,
        message: "Error al buscar el post",
      });
    });
});
// get post
router.get("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;

  Post.findById(id)
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(error => {
      res.status(404).json({
        error,
        message: "Error al buscar el post",
      });
    });
});

// create todo
// router.post("/image", authUtils.verifyToken,uploader.single("image"), (req, res) => {
//     const { _id: author } = req.user;

//     const image = req.files.map(file => file.secure_url);

//     Post.create({ ...req.body, author, image })
//       .then(post => {
//         res.status(201).json({ post });
//       })
//       .catch(error => {
//         res.status(500).json({
//           error,
//           message: "No se puedo crear el post",
//         });
//       });
//   }
// );

// update post
router.patch("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;
  const { _id: author } = req.user;

  Post.findOneAndUpdate({ _id: id, author }, { $set: req.body }, { new: true })
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "No puedes editar porque no es tu post",
      });
    });
});

// delete post
router.delete("/:id", authUtils.verifyToken, (req, res) => {
  const { id } = req.params;
  const { _id: author } = req.user;

  Post.findOneAndRemove({ _id: id, author })
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error al eliminar el post",
      });
    });
});

module.exports = router