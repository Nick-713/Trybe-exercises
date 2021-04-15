const BrazilianState = document.querySelector('#estado');
function brazilianState (){
  let State = [
    'Acre',
    'Alagoas',
   'Amapá',
   'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ]
  for(let index = 0; index < State.length; index += 1){
    const state = document.createElement('option');
    BrazilianState.appendChild(state).innerText = State[index];
    BrazilianState.appendChild(state).value = State[index];
  }
}
brazilianState();

