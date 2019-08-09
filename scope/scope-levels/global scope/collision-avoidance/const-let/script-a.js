// By wrapping our code in a block,
// and user const and let for our root level bindings
// we do not pollute the global object
// and our code is safe from collision
{
  const a = "David"
  let b = "Jones"

  console.info("==== BLOCK SCOPE ====");
  console.log(a, b); // David Jones
}