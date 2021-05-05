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
