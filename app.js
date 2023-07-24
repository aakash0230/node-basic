const express = require("express");
const router = require("./routes/routes")
const connection = require("./connection/connection");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

app.use(router);



app.listen(3000, () => {
    console.log("Express server is running on port 3000");
})