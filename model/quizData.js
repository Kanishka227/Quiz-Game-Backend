const mongoose = require("mongoose")

const quizDataSchema = new mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  A:{
    type: String,
    required: true
  },
  B:{
    type: String,
    required: true
  },
  C:{
    type: String,
    required: true
  },
  D:{
    type: String,
    required: true
  },
  answer:{
    type: String,
    required: true
  },
  dataIndex: {
    type: Number
  }
},{timestamps: true})

const Data = mongoose.model("Data",quizDataSchema)

module.exports = Data