const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}.`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  // quero de retorno  "Olá Luiz Silva, o total do seu pedido de muzzarella,calabresa e Coca-Cola Zero é R$ 50,00."
  const newClient = (order.name = "Luiz Silva");
  const newValueForPizza = (order.payment.total = "50");
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.values(order.order.drinks.coke)[0];
  return `Olá ${newClient}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newValueForPizza}.`;
};

console.log(orderModifier(order));

console.log("Objeto completo");
console.log(order);
