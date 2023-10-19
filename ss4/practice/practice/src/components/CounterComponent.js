import useIncrement from "../hooks/useIncrement";

function CounterComponent() {
    const [countOne, setCountOne] = useIncrement(0);
    const [countTwo, setCountTwo] = useIncrement(0);

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