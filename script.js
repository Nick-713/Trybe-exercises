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
  const newClient = (order.name = "Luiz Silva");
  const newValueForPizza = (order.payment.total = "50");
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.values(order.order.drinks.coke)[0];
  return `Olá ${newClient}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newValueForPizza}.`;
};

console.log(orderModifier(order));

// Parte 2
const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};
const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNewproperty = (object, key, value) => {
  object[key] = value;
};
//1
console.log(addNewproperty(lesson2, "turno", "manhã"));
console.log(lesson2);
//2
const listTheKeys = (object) => {
  const list = Object.keys(object);
  return `Chaves do objeto: ${list}`;
};

console.log(listTheKeys(lesson3));

//3
const objectSize = (object) => {
  console.log(Object.keys(object).length);
};
objectSize(lesson3);

//4
const listTheValues = (object) => {
  console.log(Object.values(object));
};
listTheValues(lesson3);
//5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
//6
// soma o número total de estudantes
const studentTotal = (lessons) => {
  const keys = Object.keys(lessons);
  let total = 0;
  for (let index = 0; index < keys.length; index += 1) {
    const currentKey = keys[index];
    total += lessons[currentKey].numeroEstudantes;
  }
  return total;
};
console.log(studentTotal(allLessons));
//7
const valuePosition = (object, number) => {
  const position = Object.values(object)[number];
  return position;
};
console.log(valuePosition(lesson3, 0));
