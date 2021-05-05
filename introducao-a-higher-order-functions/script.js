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

/* 
Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const dragonDamage = (dragon) => {
  const minDamage = 15;
  const strength = dragon.strength;
  const dragonDm = Math.floor(
    Math.random() * (strength - minDamage) + minDamage
  );
  return dragonDm;
};

console.log(dragonDamage());

/* Crie uma função que reotorna o dano causado pelo warrior .
  O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const warriorDamage = () => {
  const strength = warrior.strength;
  const maxDm = warrior.strength * warrior.weaponDmg;
  const warriorDm = Math.floor(Math.random() * (maxDm - strength) + strength);
  return warriorDm;
};

console.log(warriorDamage());
/* 
  Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
  O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
  A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Não possui mana suficiente',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

console.log(mageAttack(mage));
