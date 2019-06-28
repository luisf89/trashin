const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema (
  {
    post: {
      type: String,
      required: true
    },
    nombre: {
      type: String
    },
    imagen: {
      type: String,
      default: "https://i.redd.it/fe24zwdrfwkz.jpg"
    },
    commet: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }
)

module.exports = mongoose.model("Post", postSchema);