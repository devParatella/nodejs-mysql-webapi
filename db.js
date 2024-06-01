const customers = [
  {
    id: 1,
    nome: "Luiz",
    idade: 35,
    uf: "MG",
  },
  {
    id: 2,
    nome: "João",
    idade: 40,
    uf: "SP",
  },
];

function selectCustomers() {
  return customers;
}

function selectCustomer(id) {
  return customers.find((c) => c.id === id);
}

function insertCustomer(customer) {
  customers.push(customer);
  return customer;
}

function updateCustomer(id, customerData) {
  const customer = customers.find((c) => c.id === id);
  if (!customer) {
    throw new Error("Customer not found");
  }
  customer.nome = customerData.nome;
  customer.idade = customerData.idade;
  customer.uf = customerData.uf;
}

module.exports = {
  selectCustomers,
  selectCustomer,
  insertCustomer,
  updateCustomer,
};
