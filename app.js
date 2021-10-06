const btn = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');

let wins = 0;
let loses = 0;

btn.addEventListener('click', ()=>{
  const selected = document.querySelector('input[type=radio]:checked');
  if(!selected){
    return error.classlist.remove('hidden')
  }
  
  
  console.log(selected.value)


})