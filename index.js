const express = require("express");
const connectDB = require("./config/dbConfig");
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
dotenv.config()
const port = process.env.PORT || 3001

connectDB()
app.use("/appointment", require("./api/routes"))



app.listen(port, () => {
    console.log(`WROKING ON PORT ${port}`)
});