import React from 'react'

const hoc = () => {
    return (
        <div>

            {/* const square=(num)=>{
    return num*num
}
const cubes=(num)=>{
    return num*num*num
}
arr= [3,6,2,7]
const Reuse=(arr,logic,logic1)=>{
  let answer=[];
  let new1 = [];

  for(i=0;i<arr.length;i++){
     res=logic(arr[i])
    res1=logic1(arr[i])
     answer.push(res)
     new1.push(res1)
  }
  return answer+ " " + new1;
}
console.log(Reuse(arr,square, cubes)) */}


            {/* const square=(num)=>{
    return num*num
}
const cubes=(num)=>{
    return num*num*num
}

const Reuse=(arr,logic)=>{
  let answer=[]

  for(i=0;i<arr.length;i++){
     res=logic(arr[i])

     answer.push(res)
  }
  return answer;
}
console.log(Reuse(arr,square)) */}
        </div>
    )
}

export default hoc