import React, { useState } from 'react';

function Button() {

    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter + 1);
    return (
    <button onClick={handleClick}>
        {counter}
    </button>
    )
}

function Display() {
    return (
        <div>...</div>
    );
}

export default Button;