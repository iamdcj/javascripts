(function (){
  const globalA = "globalish binding";
  
  function local() {
    const localA = "local binding";

    console.log(globalA); //*RESOLVES
    console.log(anotherLocalA); //!ReferenceError
  }

  function anotherLocal() {
    const anotherLocalA = "anotherLocal binding";

    console.log(globalA); //*RESOLVES
    console.log(localA); //!ReferenceError

  }

  local()
  anotherLocal()

}());
