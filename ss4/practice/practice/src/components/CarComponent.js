import {useState} from "react";

function CarComponent() {

    const carList = ["Car 1", "Car 2", "Car 3"];
    const colorList = ["Black", "Blue", "Yellow"];

    const [car, setCar] = useState(carList[0]);
    const [color, setColor] = useState(colorList[0]);
    // const [selectedCar, setSelectedCar] = useState(selectedCar);

    const handleCarChose = () => {
        const car = document.getElementById("car").value;
        const color = document.getElementById("color").value;
        setColor(color);
        setCar(car);
    }
    return (
        <div>
            <h1>Select your car</h1>
            <table>
                <tr>
                    <td>Pick a car</td>
                    <td>
                        <select id="car" onChange={(color) => handleCarChose()}>
                            {carList.map((car) =>
                                <option value={car}>{car}</option>)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Chose a color</td>
                    <td>
                        <select id="color" onChange={(color) => handleCarChose()}>
                            {colorList.map((color) =>
                                <option value={color}>{color}</option>)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">You selected a: {color} - {car}</td>
                </tr>
            </table>
        </div>
    )
}

export default CarComponent;