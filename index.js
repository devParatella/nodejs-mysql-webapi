require("dotenv").config();

const db = require("./db");
const express = require("express");
const app = express();

app.get("/clientes", (req, res) => {
    res.json(db.selectCustomers());
});

app.get("/", (req, res, next) => {
  res.json({
    message: "It's alive",
  });
});

const port = process.env.PORT || 3000; // Porta padrão caso a variável não esteja definida
app.listen(port, () => {
  console.log(`Server now is running on port ${port}`);
});
