import {useEffect, useState} from "react";
import {getHouseList} from "../../../service/facilities/houseService";

export function HouseList() {
    const [houseList, setHouseList] = useState();
    const getHouses = async () => {
        const houses = await getHouseList();
        setHouseList(houses);
    }
    useEffect(() => {
        getHouses();
    }, [])

    if(!houseList) {
        return null;
    }

    return (
        <>
            <h1 className="management-title">House List</h1>
            <div className="container">
                <table className="table table-striped mt-2" id="customer-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Rent cost ($)</th>
                        <th>Max slot</th>
                        <th>Rent type</th>
                        <th>Room type</th>
                        <th>Description</th>
                        <th>Floors</th>
                        <th colSpan="2">Management</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        houseList.map((house, index) => {
                            return (
                                <tr key={house._id}>
                                    <td>{index + 1}</td>
                                    <td>{house.name}</td>
                                    <td>{house.area}</td>
                                    <td>{house.rentCost}</td>
                                    <td>{house.maxSlot}</td>
                                    <td>{house.rentType}</td>
                                    <td>{house.roomType}</td>
                                    <td>{house.description}</td>
                                    <td style={{textAlign: "center"}}><i
                                        className="fas fa-edit fa-lg"></i>
                                    </td>
                                    <td style={{textAlign: "center"}}><a
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"><i
                                        className="fas fa-trash fa-lg"
                                        style={{color: "red"}}></i></a></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}