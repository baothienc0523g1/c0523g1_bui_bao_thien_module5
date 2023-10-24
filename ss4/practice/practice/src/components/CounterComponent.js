import {useState} from "react";
import {useCounter} from "../hooks/useCounter";

function CounterComponent() {
    const [counterByOne, incrementByOne] = useCounter(1);
    const [counterByTwo, incrementByTwo] = useCounter(2);

    return (
        <div>
            <h1>Count by one: {counterByOne}</h1>
            <button onClick={() => incrementByOne(1)}>Add 1</button>
            <hr/>
            <h1>Count by two: {counterByTwo}</h1>
            <button onClick={() => incrementByTwo(2)}>Add 2</button>
        </div>
    )
}

export default CounterComponent;