//Funciones declarativas
function suma(a:number, b:number):number {
  return a + b;
}

//Funciones de expresión
let resta = ((a: number,b:number): number => {
  return a - b;
});


console.log(suma(12,123));
console.log(resta(123,32));
