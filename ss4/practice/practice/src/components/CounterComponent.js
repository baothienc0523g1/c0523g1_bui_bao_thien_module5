import {useState} from "react";

function CounterComponent() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    function handleCountOne() {
        setCountOne((prvValue) => prvValue + 1);
    }

    function handleCountTwo() {
        setCountTwo((prvValue) => prvValue + 2);
    }


    return (
        <div>
            <h1>Count by one: {countOne}</h1>
            <button onClick={handleCountOne}>Add 1</button>
            <hr/>
            <h1>Count by two: {countTwo}</h1>
            <button onClick={handleCountTwo}>Add 2</button>
        </div>
    )
}

export default CounterComponent;