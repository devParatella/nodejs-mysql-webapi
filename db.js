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
  
function selectCustomer(id){
    return customers.find(c => c.id === id);
}

  module.exports = { selectCustomers, selectCustomer };
  