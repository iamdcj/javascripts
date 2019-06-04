// By wrapping our code in a n immediately-invoked function expression
// we hide our code from the global environment,
// thus hiding it from external scripts
(function() {
  const a = "David"
  let b = "Jones"
  console.info("==== FUNCTION SCOPE ====");
  console.log(a, b); // David Jones
}());

