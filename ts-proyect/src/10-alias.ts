(() => {
  //type : es una palabrar reservada tsc
  type UserId = string | number;
  let userId: UserId;

  //Literal types
  type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Size;
  shirtSize = 'L';
  shirtSize = 'S';

  function greeting(userId: UserId, size: Size) {
    if (typeof userId === 'number') {
      console.log(`esto es un número ${userId.toFixed(1)}`);
    }
  }

  greeting(112, 'M');
  greeting('125', 'XS');
})();
