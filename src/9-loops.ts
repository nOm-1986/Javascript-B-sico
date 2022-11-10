+function(){
  let fruits: (string)[] = ['🥥','🍈','🍉','🍊','🍋','🍌'];

  for(let i = 0; i < fruits.length; i++ ) {
    console.log(`Position i = ${i} --- Element = ${fruits[i]}`);
  }

  for(let element of fruits) {
    console.log(`Element = ${element}`);
  }

}();
