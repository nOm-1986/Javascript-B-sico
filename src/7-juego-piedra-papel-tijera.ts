(()=>{
  let playerOption: number = 1;
  let randomOption: number = Math.floor(Math.random() * (3) + 1);
  let options: (string)[] = ['Piedra', 'Papel', 'Tijera'];

  console.log(`Your chose: ${options[playerOption-1]}, machine chose: ${options[randomOption-1]}\n`);

  if( (playerOption === 1 && randomOption === 3) || (playerOption === 2 && randomOption === 1) || (playerOption === 3 && randomOption === 2) ) {
    console.log('You win');
  } else if( playerOption === randomOption) {
    console.log('Even game');
  } else {
    console.log('You lost');
  }

})();
