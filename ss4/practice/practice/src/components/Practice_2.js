import {useState, useEffect} from "react";

function Practice_2() {
    const [selected, setSelected] = useState(0);
    const [valueSelected, setValueSelected] = useState("");

    const choice = (e) => {
      setSelected(e.target.value)
    };

    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Java");
                break;
            case "1":
                setValueSelected("Angular");
                break;
            case "2":
                setValueSelected("JS");
                break;
            case "3":
                setValueSelected("PHP");
                break;
            default:
        }
    }, [selected]);
    return (
        <div>
            Course:
            <select
            onChange={(e) => choice(e)}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">JS</option>
                <option value="3">PHP</option>
            </select>
            <h2>Your select: {valueSelected}</h2>
        </div>
    );
}
export default Practice_2;