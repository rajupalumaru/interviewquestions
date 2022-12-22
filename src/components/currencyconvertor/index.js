import React, { useState } from 'react';

const CurrencyConvertor = () => {
    const [rupee, setRupee] = useState("");
    const [doller, setDoller] = useState("");

    const handleChange1 = (e) => {
        setDoller(e.target.value);
        
        if (e.target.value) {
            setRupee(e.target.value * 0.012);
        } else {
            setRupee("");
        }
    }
    const handleChange2 = (e) => {
        setRupee(e.target.value);
        if (e.target.value) {
            setDoller(e.target.value * 81.42);
        } else {
            setDoller("")
        }
    }

    return (
        <div>
            <input
                type='number'
                placeholder='Rupee'
                value={doller}
                onChange={handleChange1}
            />
            <input
                type='number'
                placeholder='Doller'
                Value={rupee}
                onChange={handleChange2}
            />

        </div>
    )
}
export default CurrencyConvertor;