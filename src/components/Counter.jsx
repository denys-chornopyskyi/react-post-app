import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0)

    const increment = () => {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;