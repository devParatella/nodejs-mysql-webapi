require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.json({
    message: "Its's alive",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server now is running on port ${process.env.PORT}`);
});
