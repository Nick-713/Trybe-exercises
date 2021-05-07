/* 
Função para executar em cada elemento, recebendo três argumentos:
currentValue
O valor atual do elemento sendo processado no array.
index Optional
O índice do elemento atual sendo processado no array.
array Optional
O array que forEach() está sendo aplicado.
thisArg Optional
Opcional. Valor a ser usado como this quando executar callback. 

Use o método forEach chamando a callback showEmailList para apresentar os emails.
*/
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((currentValue, index, thisArg) => {
  showEmailList(currentValue);
  console.log(`A sua posição é: ${index}`);
  console.log(`Email que estão cadastrados: ${thisArg.length}`);
});
//tabuada do 2
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
//
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
