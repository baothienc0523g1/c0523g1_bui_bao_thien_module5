import {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

function TimerComponent() {
    const [countDown, setCountDown] = useState(10   );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((pervCountDown) => pervCountDown - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if (countDown === 0) {
            alert("time is out!")
        }
    }, [countDown]);

    return (
        <div>
            <h1>Countdown</h1>
            <h1 id="countDown">{countDown}</h1>
        </div>
    )
}

export default TimerComponent;