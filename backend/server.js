const express = require("express");
const cors = require("cors");
const questions = require("./questions.json");

const app = express();
app.use(cors());
app.use("/signs", express.static("public/signs"));

app.get("/questions", (req, res) => res.json(questions));
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
