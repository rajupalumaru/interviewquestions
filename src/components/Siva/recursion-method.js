import React from 'react'

const Recursion = () => {
    function recursion(n) {
        if (n > 1) {
            return n * fact(n - 1);
        } else {
            return n;
        }
    }
    console.log(recursion(5))
    return (
        <div></div>
    )
}

export default Recursion
