/**
 * HOISTING -> Elevar, izar, alzar, levantar
 * Es para EMScript 5 y anteriores.
 * var nombre;
 * console.log(nombre) => Undefined
 * nombre = 'Fabian'
 *
 * Tambien hay hoisting con las funciones
 * Solo que si llamamos una función antes de crearla, JS hace el hoisting de la función y despues si la ejecuta
 * algo que no hace con las variables.
 *
 *
 * COERCIÓN --- Forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos.
 * - COERCIÓN IMPLICITA = Cuando el lenguaje nos ayuda a cambiar el tipo de valor
 * - COERCIÓN EXPLICITA = Cuando obligamos a que cambie el tipo de valor.
 */

(()=>{
  let miNombre: any = '20.09239';
  const rta = (<number>miNombre).toFixed(2);
  console.log(rta);
})();
