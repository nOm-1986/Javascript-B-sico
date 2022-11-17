(() => {
  //Array with articles
  type Articulos = {nombre:string, costo:number};
  let articles: Articulos[] = [
    {nombre: 'bicicleta' , costo:1000},
    {nombre: 'Tv' , costo:2000},
    {nombre: 'Libro' , costo:300},
    {nombre: 'Celular' , costo:3000},
    {nombre: 'Laptop' , costo:5000},
    {nombre: 'Teclado' , costo:150},
    {nombre: 'Audifonos' , costo:100},
    {nombre: 'Monitor' , costo:1000}
  ];

  /*Filter: -> Valida si algo es verdad o falso y retorna un nuevo arreglo
              No genera un nuevo arreglo.
  */
  let filterArticlesByPrice: Articulos[] = articles.filter(function(art){
    return art.costo <= 300;
  });

  console.log(filterArticlesByPrice);

 /**
  * Map: -> Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
 */
  let filterArticlesWithMap: string[] = articles.map(function(art){
    return art.nombre;
  });
  console.log(filterArticlesWithMap);

  /**
   * Find -> Genera un nuevo arreglo si encuentra una coincidencia.
   *          Devuelve el primer elemento del array que cumpla con la condición dada
   */

  let encuentraArticulo = articles.find(function(art){
    return art.nombre === 'Tv'
  });
  console.log(encuentraArticulo);

  /**
   * foreach
   */
  let res = [];
  articles.forEach(function(art){
    console.log(art.nombre);
  });

  /**
   * Some -> Regresa un true o false, si la condición se cumple, solo eso.
   */
  let cheaperArticles = articles.some(function(art){
    return art.costo > 50000;
  });
  console.log(cheaperArticles);

})();
