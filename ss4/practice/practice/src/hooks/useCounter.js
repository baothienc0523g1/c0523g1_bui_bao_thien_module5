import {useState} from "react";

export function useCounter(props) {
    const [counter, setCounter] = useState(props);

    const increment = (amountValue) => {
        setCounter(counter + amountValue)
    };
    return [counter, increment];

}