(()=> {
  type miAuto = {
    marca: string,
    modelo: string,
    annio: number,
    available: boolean,
    details: () => void;
  };

  let myObject: miAuto = {
    marca: 'Toyota',
    modelo:'Land cruiser',
    annio: 2022,
    available: true,
    details: function(){
      console.log(`Printing somethings about my object ${this.modelo}`);
    }

  };
  console.log(myObject);

})();
