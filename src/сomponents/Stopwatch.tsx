import { useState, useEffect } from "react";

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="card">
            <h2>Stopwatch</h2>
            <h3>{seconds} seconds</h3>
        </div>
    );
};

export default Stopwatch;
