import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="card">
            <h2>Counter</h2>
            <h3>{count}</h3>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
};

export default Counter;
