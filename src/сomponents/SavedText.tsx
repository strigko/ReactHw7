import { useState, useEffect } from "react";

const SavedText = () => {
    const [text, setText] = useState(() => {
        return localStorage.getItem("savedText") || "";
    });

    useEffect(() => {
        localStorage.setItem("savedText", text);
    }, [text]);

    return (
        <div className="card">
            <h2>Saved Text</h2>

            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
                placeholder="Enter some text"
            />

            <p>Saved text: {text}</p>
        </div>
    );
};

export default SavedText;
