(function () {

  function cakeBuilder(topping, centre, base) {
    const cake = `Cake consists of a ${createIcing(topping)}, a ${createCentre(centre)} and a ${createBase(base)}.`;

    console.log(cake);
  }

  function createIcing(icing) {
    return `${icing} topping`;
  }


  function createCentre(centre) {
    return `${centre} centre`;
  }


  function createBase(base) {
    return `${base} base`;
  }

  cakeBuilder("sugar cream", "sponge", "biscuit");

}());
