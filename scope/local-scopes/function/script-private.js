(function () {

  function cakeBuilder(topping, centre, base) {
    let cake = "";

    function createIcing(icing) {
      return `${icing} topping`;
    }


    function createCentre(centre) {
      return `${centre} centre`;
    }


    function createBase(base) {
      return `${base} base`;
    }

    cake = `Cake consists of a ${createIcing(topping)}, a ${createCentre(centre)} and a ${createBase(base)}.`;


    console.log(cake);
  }

  cakeBuilder("sugar cream", "sponge", "biscuit");


}());
