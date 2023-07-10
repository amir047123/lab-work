const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ["Tiny", "Small", "Medium", "Large"],
  },
  friendliness: { type: Number, min: 1, max: 5 },
  trainability: { type: Number, min: 1, max: 5 },
  sheddingamount: { type: Number, min: 1, max: 5 },
  exerciseneeds: { type: Number, min: 1, max: 5 },
});

const Breed = mongoose.model("Breed", breedSchema);

module.exports = Breed;
