// === CONTEXT BINDING: REGULAR VS ARROW

// Regular Function Expression
const user = {
  username: "David",
  logUser() {
    console.log("NAME: ", this.username);

    function doubleLog() {
      console.log(this.username);
    }

    doubleLog();
  }
};

// NAME: David
// undefined

// Arrow Function Expression
const user1 = {
  username: "David",
  logUser() {
    console.log("NAME: ", this.username);

    const doubleLog = () => {
      console.log(this.username);
    };

    doubleLog();
  }
};
// NAME: David
// David

// === SHORTER SYNTAX

// Regular Function Expression
const addCountry = cities.map(function(city) {
  return `${city}, USA`;
});

// Arrow Function Expression
const addCountry2 = cities.map(city => {
  return `${city}, USA`;
});

// === IMPLICIT RETURNS SYNTAX

// Regular Function Expression
const addCountry3 = cities.map(function(city) {
  return `${city}, USA`;
});

// Arrow Function Expression
const addCountry4 = cities.map(city => `${city}, USA`);

// -- IMPLICIT OBJECT RETURN
const returnCountry = cities.map(city => ({ city, country: "USA" }));
