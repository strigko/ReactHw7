import Counter from "./сomponents/Counter";
import Stopwatch from "./сomponents/Stopwatch";
import SavedText from "./сomponents/SavedText";
import AutoFocus from "./сomponents/AutoFocus";
import Slider from "./сomponents/Slider";

const App = () => {
    return (
        <div className="container">
            <h1>React Hooks Tasks</h1>

            <Counter />
            <Stopwatch />
            <SavedText />
            <AutoFocus />
            <Slider />
        </div>
    );
};

export default App;
