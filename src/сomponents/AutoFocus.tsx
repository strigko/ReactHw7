import { useEffect, useRef } from "react";

const AutoFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="card">
            <h2>Auto Focus</h2>

            <input
                ref={inputRef}
                type="text"
                placeholder="Type something..."
            />
        </div>
    );
};

export default AutoFocus;
