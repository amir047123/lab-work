const express = require("express");
const { BreedDetail, BreedList } = require("../controllers/breedController");

const router = express.Router();

const breedDetail = new BreedDetail();
const breedList = new BreedList();

router.get("/", breedList.get);
router.post("/", breedList.post);
router.get("/:id", breedDetail.get);
router.put("/:id", breedDetail.put);
router.delete("/:id", breedDetail.delete);

module.exports = router;
