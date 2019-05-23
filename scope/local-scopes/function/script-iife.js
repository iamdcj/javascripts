// IIFE Style A
(function IIFE(){
  console.log(IIFE)
}());

// IIFE Style B
(function IIFE(){
  console.log(IIFE)
})();

// IIFE w/ Parameter
(function IIFE(global){
  console.log(global)
})(window);

// IIFE w/ undefined
(function IIFE(undefined){
  var a;

  if(a === undefined) {
    console.log(`${a} is UNDEFINED`)
  }
})();