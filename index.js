require("dotenv").config();

const db = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

app.patch("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = req.body;
    db.updateCustomerCustomer(id, customer);
    res.sendStatus(200);
});

app.post("/clientes", (req, res) => {
    const customer = req.body;
    db.insertCustomer(customer);
    res.sendStatus(201);
});

app.get("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(db.selectCustomer(id));
  });

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
