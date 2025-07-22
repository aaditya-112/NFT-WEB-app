const express = require("express");
const { aadNft, getAllNft } = require("../controllers/Nft/nft.controller");

const router= express.Router();

router.post("/aadnft",aadNft);
router.get("/getAllNft", getAllNft)

module.exports= router;