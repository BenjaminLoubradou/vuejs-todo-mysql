const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const tasks = require("./routes/tasks")

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",tasks)

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
