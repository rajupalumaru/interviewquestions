import React from "react";

const FlattenArray=()=>{

    var arr=[1,2,[3,4,[5,6],[7,8,[9]]]];
    console.log(arr.toString().split(",").map(( )=>parseInt(ele)));



 //=========================================================================

    
const element = (input) => {
    let res = [];
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === "number") {
        res.push(input[i])
      } else {
        res = res.concat(element(input[i]))
      }
    }
    return res
  }
  console.log(element(arr));


    return(
        <>
        </>
    )
}
export default FlattenArray;