import {useState} from "react";

function Counter() {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    }

    return (
        <div>
            <h1>Value: {count}</h1>
            <div>
                <button onClick={handleClick}>Increase</button>
            </div>
        </div>
    )
}

export default Counter;
