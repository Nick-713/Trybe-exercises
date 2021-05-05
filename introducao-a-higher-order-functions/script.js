//Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const hiredPerson = (person) => {
  const email = person.toLowerCase().split(' ').join('_');
  return { person, email: `${email}@betrybe.com` };
};

const newEmployees = (hiredPerson) => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: hiredPerson('Luiza Drumond'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: hiredPerson('Carla Paiva'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    id4: hiredPerson('Nicolas Pereira Silva'),
  };

  return employees;
};

console.log(newEmployees(hiredPerson));

//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberCheck = (myNumber, number) => myNumber === number;

const numberdraw = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5);

  return callback(myNumber, number)
    ? 'Parabéns você ganhou'
    : 'Tente Novamente';
};

console.log(numberdraw(5, numberCheck));
