const express = require("express");
const { DogDetail, DogList } = require("../controllers/dogController");

const router = express.Router();

const dogDetail = new DogDetail();
const dogList = new DogList();

router.get("/", dogList.get);
router.post("/", dogList.post);
router.get("/:id", dogDetail.get);
router.put("/:id", dogDetail.put);
router.delete("/:id", dogDetail.delete);

module.exports = router;
