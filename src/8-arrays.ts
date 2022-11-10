(() => {
  let fruits: (string)[] = ['🥥','🍈','🍉','🍊','🍋','🍌'];
  let moreFruits: (string)[] = [];

  moreFruits.push('🍓');

  console.log('Initial data:');
  console.log('length: ' + fruits.length);
  console.log(fruits);


  console.log('Using push 🍓');
  fruits.push('🍓');
  console.log(fruits);
  console.log(fruits.length);

  console.log('After use pop');
  fruits.pop();
  console.log(fruits.length);
  console.log(fruits);

  console.log('Using unshift at the begin');
  fruits.unshift('🍒');
  console.log(fruits.length);
  console.log(fruits);

  console.log('Using shift to delete the first element from my array');
  fruits.shift();
  console.log(fruits.length);
  console.log(fruits);

  console.log('Getting the index from an element');
  console.log(fruits.indexOf('🍋'));
  console.log(fruits.length);
  console.log(fruits);

})();
