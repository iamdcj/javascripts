(function (){
  const a = "globalish binding";

  function local() {
    const b = "local binding";

    console.log(a); //*RESOLVE
    console.log(c); //!ReferenceError

    function anotherLocal() {
      const c = "anotherLocal binding";

      console.log(a); //*RESOLVE
      console.log(b); //*RESOLVE
      console.log(c); //*RESOLVE

    }
    anotherLocal();

  }

  local();

}());
