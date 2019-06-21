const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema (
  {
    post: {
      type: String,
      required: true
    },
    imagen: {
      type: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }
)

module.exports = mongoose.model("Post", postSchema);