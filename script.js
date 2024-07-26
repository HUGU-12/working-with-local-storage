const playerNames = document.querySelector('.player-names');
const form = document.querySelector('.add-players');
const players = JSON.parse(localStorage.getItem('players')) || [];

function addPlayer(e){
  e.preventDefault();
  const playerInput = form.querySelector('input[name=player]').value;

  const item = {
    playerInput, selected: false
  };
  players.push(item);
  populateList(players, playerNames);
  localStorage.setItem('players',JSON.stringify(players));
  this.reset();
}
function populateList(listSource=[], list){
  list.innerHTML = listSource.map((element,index) =>{
    return `<li>
      <input type='checkbox' data-index=${index} id='item${index}' ${element.selected ? 'checked' : ''}>
      <label for='item${index}'>${element.playerInput}</label>
    </li>`;
  }).join('');
}
function toggleIcon(event){
  if(!event.target.matches('input')) return;
  const target = event.target;
  const index = target.dataset.index;
  players[index].selected = !players[index].selected;
  localStorage.setItem('players',JSON.stringify(players));
}

form.addEventListener('submit',addPlayer);
playerNames.addEventListener('click',toggleIcon);
populateList(players,playerNames);