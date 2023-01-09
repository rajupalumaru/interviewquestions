import React from 'react';


const KeysValues = () => {
    let person = [{
        firstName: "raju",
        lastName: "Yadav",
        age: 26
    }, {
        firstName: "ramu",
        lastName: "palumaru",
        age: 28
    }]
    const res = Object.keys(person[0].map((key) => {
        return {
            [key]: person.map((per) => per[key])
        }
    }
    ))
    console.log(res);
    return (
        <div>

        </div>
    )
}
export default KeysValues;