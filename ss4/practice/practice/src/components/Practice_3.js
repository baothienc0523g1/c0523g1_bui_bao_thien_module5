import useClock from "../hooks/useClock";

function Practice_3() {

    const [time, ampm] = useClock();
    return (
        <div id="Clock-style">
            {time}
            <span> {ampm}</span>
        </div>
    );
}
export default Practice_3;