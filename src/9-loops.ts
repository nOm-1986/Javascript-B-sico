+function(){
  let fruits: string[] = ['🥥','🍈','🍉','🍊','🍋','🍌'];

  for(let i = 0; i < fruits.length; i++ ) {
    console.log(`Position i = ${i} --- Element = ${fruits[i]}`);
  }

  for(let element of fruits) {
    console.log(`Element = ${element}`);
  }

  //Using while
  function fruitName(fruta: string | undefined):void {
    console.log(`Hi ${fruta}`);
  }

  while(fruits.length > 0) {
    console.log(`Hi ${fruits}`);
    let singleFruit = fruits.shift();
    console.log(typeof(singleFruit));
    fruitName(singleFruit);
  }

}();
