const Breed = require("../models/breedModel");

// Breed Detail Controller
class BreedDetail {
  async get(req, res) {
    try {
      const breed = await Breed.findById(req.params.id);
      res.json(breed);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async put(req, res) {
    try {
      const breed = await Breed.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(breed);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      await Breed.findByIdAndRemove(req.params.id);
      res.json({ message: "Breed deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

// Breed List Controller
class BreedList {
  async get(req, res) {
    try {
      const breeds = await Breed.find();
      res.json(breeds);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async post(req, res) {
    console.log(req.body);
    try {
      const breed = await Breed.create(req.body);
      res.json(breed);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = {
  BreedDetail,
  BreedList,
};
