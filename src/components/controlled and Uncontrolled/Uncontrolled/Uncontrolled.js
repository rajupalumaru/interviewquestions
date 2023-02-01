import React, { useRef } from 'react';

const UnControlled = () => {
    const inputRef = useRef('');

    const HandleSubmit = (e) => {
        e.preventDefault();
        alert(inputRef.current.value);


    }
    return (
        <form onSubmit={HandleSubmit}>
            <input type='text' ref={inputRef} />
            <input type='submit' value='submit' />
        </form>
    )
}

export default UnControlled; 