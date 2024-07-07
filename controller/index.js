const Data = require("../model/quizData");

const getTenQuestions = async (req, res) => {
  try {
    const dataArray = [];
    const indexSet = new Set();

    for (let i = 0; i < 10; ) {
      const randomNumber = Math.floor(Math.random() * 500);
      if (indexSet.has(randomNumber)) {
        continue;
      } else {
        const data = await Data.findOne({
          dataIndex: randomNumber,
        });
        if(data){
        dataArray.push(data);
        indexSet.add(randomNumber);
        i++;
        }
      }
    }
    return res.send(dataArray);
  } catch (error) {
    res.status(500).json({ msg: "error fetching data from database" });
  }
};

module.exports = { getTenQuestions };
