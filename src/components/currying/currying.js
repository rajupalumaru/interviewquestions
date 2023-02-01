import React from 'react';


const Currying = () => {
  function sum(x) {
    return function (y) {
      if (y) {
        return (sum(x + y, y))
      } else {
        return x;
      }
    }

  }
  console.log(sum(1)(2)(3)(4)());

  ///////////////////////////

  let sum = a => b => b ? sum(a + b) : a;

  console.log(sum(10)(20)(3)(4)());
  return (
    <>
    </>
  )
}
export default Currying;