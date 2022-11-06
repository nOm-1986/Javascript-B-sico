(()=> {

  type Persona = {nombre: string, edad: number, pertenencia: (string)[]};

  let nombre: string = 'Fabián';
  let edad: number = 36;
  let elementos: (string)[] = ['Computadora','Celular','Monitor'];
  let persona: Persona = {nombre:nombre, edad: edad, pertenencia: elementos};

  console.log(persona);
  console.log(persona.pertenencia[0]);

})();
