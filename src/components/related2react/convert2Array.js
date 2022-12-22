import React from 'react';

const Convert2Array = () => {

    const obj = { ran: 25, na: 24 }
    const result = Object.entries(obj);
    console.log(result, "result");

    var obj1 = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }
    var result1 = Object.entries(obj1);

    console.log(result1);
    return (
        <>
        </>
    )
}
export default Convert2Array;