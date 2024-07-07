const mongoose = require("mongoose");
const questions = require("../questions.json")
const Data = require("../model/quizData")
require("dotenv").config();
const DB_URL = process.env.DB_URL

const connectMongoDb = async() => {
  try{
    await mongoose
    .connect(`${DB_URL}`)
    .then(() => console.log("Mongodb connected"));
  }
  catch(error){
    console.log("Mongodb connection error",error);
  }
 
};

const addInitialData = async() => {
  try{
  questions.map(async(question,index)=> {
    await Data.create({
      question: question.question,
      A: question.A,
      B: question.B,
      C: question.C,
      D: question.D,
      answer: question.answer,
      dataIndex: index
    })
  })
}
catch(error){
  console.log("error adding initial data to the database",error);
}
}

module.exports = {connectMongoDb,addInitialData}



