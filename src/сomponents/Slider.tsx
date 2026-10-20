import { useState, useEffect } from "react";

const slides = [
    "Welcome to React!",
    "Learn useEffect",
    "Build amazing projects"
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="card slider">
            <h2>Slider</h2>

            <h3>{slides[currentSlide]}</h3>

            <p>
                Slide {currentSlide + 1} of {slides.length}
            </p>

            <button
                onClick={() =>
                    setCurrentSlide(prev => (prev + 1) % slides.length)
                }
            >
                Next
            </button>
        </div>
    );
};

export default Slider;
