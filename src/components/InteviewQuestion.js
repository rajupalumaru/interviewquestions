import React from 'react';

const InterviewQuetions = () => {
    return (
        <>
        </>
    )
}
export default InterviewQuetions;

/////////////////////////////////////////////////////////////////////////////////////////////////////

const obj1 = { a: "abc", b: 10,c:'abc' }
const obj2 = { a: "test", b:20,c: 10, d: '123' }

function foo(obj1, obj2) {

    const newObject = {}
    for (const key in { ...obj1, ...obj2 }) {
        const element1 = obj1[key];
        const element2 = obj2[key];
        
        if (element1 && element2)
           if(typeof element1 == "string" &&typeof element2==="string")
            newObject[key] = element1+" "+element2
            else if (typeof element1 !=  typeof element2)
            newObject[key] = [element1,element2]
            else{
            newObject[key] = element1+element2
            }
        else if (element1)
            newObject[key] = element1
        else if (element2)
            newObject[key] = element2
    }
    return newObject
}
console.log(foo(obj1, obj2))

// output:
// {
//     a: "abc test",
//     b: 30,
//     c: ["abc", 10],
//     d: "123"
//   }

///////////////////////////////////////////////////////////////////////////////////////////////////