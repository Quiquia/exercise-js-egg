(() => {
  // let myNumber: number;
  // let myString: string;

  let typeUndefined: undefined = undefined;
  let typeNull: null = null;

  //en angular los componentes son dinamicos antes que carge es null (por un pequeño momento)
  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = ' assa';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log('🚀 ~ hi ~ hello:', hello);
  }

  //opcional
  function hiV2(name: string | null) {
    let hello2 = 'Hola ';
    hello2 += name?.toLowerCase() || 'nobody';
    console.log('🚀 ~ hi ~ hello:', hello2);
  }

  hi('Emil');
  hi('');
  hi(null);
  hiV2('vane');
  hiV2(null);
})();
