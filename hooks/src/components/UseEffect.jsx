import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0); 
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 2000);

        return () => clearTimeout(timer); 
    }, [count]); 
    return (
        <div>
            <h1>I've rendered {count} times.</h1>
        </div>
    );
}

export default UseEffect;
