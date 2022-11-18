(()=> {

  let tipoSuscripcion: any = {
    Free:'Solo puedes tomar los cursos gratis',
    Basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertDuo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
  }

  function suscriptionType(tipo:string):void{
    if(typeof tipoSuscripcion == 'object'){
      if(tipoSuscripcion[tipo] ){
        console.log(tipoSuscripcion[tipo]);
        return;
      } else console.warn('Key no encontrada');
    }
  }

  suscriptionType('Fre3e');

})();
