const Dog = require("../models/dogModel");

// Dog Detail Controller
class DogDetail {
  async get(req, res) {
    try {
      const dog = await Dog.findById(req.params.id).populate("breed");
      res.json(dog);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async put(req, res) {
    try {
      const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(dog);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      await Dog.findByIdAndRemove(req.params.id);
      res.json({ message: "Dog deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

// Dog List Controller
class DogList {
  async get(req, res) {
    try {
      const dogs = await Dog.find().populate("breed");
      res.json(dogs);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async post(req, res) {
    try {
      const dog = await Dog.create(req.body);
      res.json(dog);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = {
  DogDetail,
  DogList,
};
