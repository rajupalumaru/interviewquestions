import React from 'react'

const SetTimeoutAndInterval = () => {

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        })

    }  //7989230309  Amazon  

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i)

    }

    return (
        <div>
            {


            }
        </div>
    )
}

export default SetTimeoutAndInterval
