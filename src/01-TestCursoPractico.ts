(() => {
/** TEST CURSO PRACTICO DE JAVASCRIPT
 *
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
 * ¿Qué es una variable y para que sirve?
 * Una variable es un espacio reservado en memoria que nos permite almacenar información.
 *
 * ¿Cuál es la diferencia entre declarar e inicializar una variable?
 * Yo puedo declarar una variables, simplemente let nombre; su valor va a ser undefined.
 * Inicializar la variable es darle un valor a dicha variables, dicho valor puede ser boolean, string, number ....
 *
 * ¿Cuál es la diferencia entre sumar números y concatenar strings?
 * La suma de números es una operación aritmética, mientras que la concatenación es ir concatenando(poniendo uno al lado del otro un string) un string.
 *
 * ¿Cuál operador me permite sumar o concatenar? -> el signo +
 *
 * 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
 */

  let nombre: string = 'José';
  let apellido: string = 'Beltrán';
  let userName: string = 'myNickName';
  let edad: number = 35;
  let email: string = 'micorreo@gmail.com'
  let mayorEdad: boolean = true;
  let ahorros: number = 25000000;
  let deudas: number = 0;


  const fullName = (nombres:string, apellidos: string):string => {
    return `${nombres} ${apellidos}`;
  }

  const realMoney = (ahorro: number, deuda: number):number => {
    return ahorro - deuda;
  }

  let nombresCompleto = fullName(nombre, apellido);
  console.log(nombresCompleto);

  let miAhorro = realMoney(ahorros, deudas);
  console.log(miAhorro);

/**FUNCIONES
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
 * ¿Qué es una función?
 *  Una función es un bloque de codigo el cual puede ser reutilizado muchas veces. Nos evita estar copiando y pegando la misma lógica una y otra vez.
 * ¿Cuándo me sirve usar una función en mi código?
 *  Cuando veo que un segmento de código hace una función determinada, y dicha lógica es implementada en varias partes del programa.
 *  Tambien nos sirve para mejorar la legibilidad de nuestro código.
 * ¿Cuál es la diferencia entre parámetros y argumentos de una función?
 * Los parámetros son los valores que se necesitan pasar a una función para su correcto funcionamiento. Los argumentos son esos valores que pasamos a la función.
 * Defin curso: Las funcione reciben parámetros cuando las creamos y les envíamos argumentos cuando las ejecutamos.
 */

  const greeting = (name:string, lastName: string, nickName: string='withoutNickName'):void => {
    console.log(`Hi my name is ${fullName(name, lastName)}, but i prefer everybody talk me ${nickName}.`);
  }

  greeting(nombre, apellido,userName);

})();
