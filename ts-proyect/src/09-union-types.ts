(() => {
  let userId: number | string;
  userId = 12;
  userId = '125d';

  function greeting(myText: string | number) {
    if (typeof myText === 'number') {
      console.log(`string ${myText.toFixed(1)}`);
    } else {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  greeting('asas');
  greeting(12.512);
})();
