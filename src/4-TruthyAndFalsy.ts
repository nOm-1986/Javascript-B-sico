(()=> {
  //Falsy
  console.log(Boolean(0));
  console.log(Boolean(0.0));
  console.log(Boolean(""));
  console.log(Boolean(''));
  console.log(Boolean(``));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));

  //Truthy
  console.log('====================');
  console.log(Boolean(0.1));
  console.log(Boolean('afadsf'));
  console.log(Boolean(' ')); //Asi sea un espacio.
  console.log(Boolean([]));
  console.log(Boolean(new Array()));
  console.log(Boolean(function(){}));
  console.log(Boolean({}));

})();
