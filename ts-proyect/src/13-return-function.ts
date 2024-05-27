(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  //Funciones NO TIENEN RETORNO  es de TYPE VOID solo llama a una función
  const printTotal = (prices: number[]): void => {
    const rpta = calcTotal(prices);
    console.log('🚀 ~ printTotal ~ rpta:El total es:', rpta);
  };

  printTotal([1, 2, 5, 7]);
})();
