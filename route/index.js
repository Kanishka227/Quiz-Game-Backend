const express = require("express")
const router = express.Router()
const { getTenQuestions } = require("../controller/index")

router.get("/",getTenQuestions)

module.exports = {router}