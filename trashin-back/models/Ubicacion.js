const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ubicacionSchema = new Schema (
  {
    position: {
      type: {
        type: String,
        default: "Point"
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      coordinates:[Number]
    }
  }
)

module.exports = mongoose.model("Ubicacion", ubicacionSchema);