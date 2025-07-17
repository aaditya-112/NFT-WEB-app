const express = require("express");
const { aadNft } = require("../controllers/Nft/nft.controller");

const router= express.Router();

router.post("/aadnft",aadNft);

module.exports= router;