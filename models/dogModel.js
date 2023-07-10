const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: { type: mongoose.Schema.Types.ObjectId, ref: "Breed" },
  gender: String,
  color: String,
  favoritefood: String,
  favoritetoy: String,
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
