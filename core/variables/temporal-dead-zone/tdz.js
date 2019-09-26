//* Example - TDZ w/ let
//! hoisting with error
{
  // Using let
  console.log(_bcLet);
  /* ==========
  * ===========
  * === TDZ ===
  * ===========
  =========== */
  let _bcLet = "🦕 Dinosaurs 🦖";

  //! Cannot access '_bc' before initialization
}

//* Example - TDZ w/ const
//! hoisting with error
{
  // Using Const
  console.log(_bcConst);
  /* ==========
  * ===========
  * === TDZ ===
  * ===========
  =========== */
  const _bcConst = "🦕 Dinosaurs 🦖";

  //! Cannot access '_bc' before initialization
}

//* Example - TDZ w/ var
//* hoisting without error
{
  // Using Var
  console.log(_bcVar);
  /* ==========
  * ===========
  * === TDZ ===
  * ===========
  =========== */
  var _bcVar = "🦕 Dinosaurs 🦖";

  //{} undefined
}