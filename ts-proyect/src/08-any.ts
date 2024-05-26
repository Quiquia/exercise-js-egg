(() => {
  //cualquier valor puede ir ahí, regresamos a JS
  //es mala practica poner any
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //con as puedes tiparlo obligatoriamente
  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log('🚀 ~ rta:', rta);

  myDynamicVar = 1222;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log('🚀 ~ rta2:', rta2);
})();
