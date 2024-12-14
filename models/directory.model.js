const { Schema, model } = require("mongoose");

const dirSchema = new Schema({
  title: {
    type: String,
    required: [true, "directory title is required!!"],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
});

const dirModel = model("directory", dirSchema);

module.exports = dirModel;
