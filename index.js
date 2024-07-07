const express = require("express")
const cors = require("cors")
const {connectMongoDb,addInitialData} = require("./mongodbConnect/index")
const {router: dataRoute} = require("./route/index")
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3000

connectMongoDb()
addInitialData()

app.use(cors())

app.use("/data",dataRoute)


app.listen(PORT,() => console.log(`server running at http://localhost:${PORT}`))