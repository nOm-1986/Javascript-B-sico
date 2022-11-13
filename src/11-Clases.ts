(()=>{
  /* No se puede utilizar prompt en consola. Pero se puede implementar una libreria en node para remplazar esta funcionalidad. */
  function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }

  let autos = []
  let cantidad = prompt('Cuantos: ');
  cantidad = parseInt(cantidad);


  while (cantidad > 0){
    let marca = prompt('Marca: ');
    let modelo = prompt('Modelo: ');
    let annio = prompt('Anio: ');
    car = new Auto(marca, modelo, annio);
    autos.push(car);
    cantidad--;
  }

  console.log(autos);

})();
