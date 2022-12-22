import React, { useEffect, useMemo, useState } from 'react';

const UseEffects = () => {
    const [effect, setEffect] = useState(0);
    const [memo, setmemo] = useMemo(0);
    useEffect(() => {
        console.log("effect")
    }, [])
    useMemo(() => {
        console.log("memo");
    }, [])

    return (
        <center>
            <button onClick={() => setEffect(effect + 1)}>Effect Increment</button>
            <button onClick={() => setmemo(memo + 1)}>Effect Increment</button>

        </center>
    )
}
export default UseEffects;