import React, {useEffect, useState} from "react";
import {getVillaList} from "../../service/facilities/viilaService";
import {getRoomList} from "../../service/facilities/roomService";
import {getHouseList} from "../../service/facilities/houseService";
import {HouseList} from "./house/HouseList";
import {useNavigate} from "react-router-dom";

export function FacilitiesTable() {
    const [roomList, setRoomList] = useState();
    const [houseList, setHouseList] = useState();
    const [villaList, setVillaList] = useState();
    const navigate = useNavigate();

    const listOfType = ["rooms", "houses", "villas"];
    const [typeOfList, setTypeOfList] = useState("rooms");
    console.log(typeOfList);

    const getRooms = async () => {
        const rooms = await getRoomList();
        setRoomList(rooms);
    }
    const getHouses = async () => {
        const houses = await getHouseList();
        setHouseList(houses);
    }
    const getVillas = async () => {
        const villas = await getVillaList();
        setVillaList(villas);
    }

    useEffect(() => {
        getRooms();
        getHouses();
        getVillas();
    }, [])

    if (!roomList || !houseList || !villaList) {
        return null;
    }

    const handleCreateVilla = () => {
        navigate("/villa/add");
    }

    return (
        <>
            <div className="container mt-5">
                {
                    listOfType.map((type, index) => {
                        return (
                            <button id="chose-facility"
                                    onClick={() => setTypeOfList(type)}
                                    className="btn btn-outline-info"
                                    style={type === typeOfList ? {backgroundColor: '#0dcaf0', color: "white"} : {}}
                                    key={index}
                            >
                                {type.toUpperCase()}
                            </button>
                        )
                    })
                }
            </div>
            <div className="management-div">
                <div className="container">
                    <>
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
                                                <tr key={house.id}>
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
                        <>
                            <h1 className="management-title">Villa List</h1>
                            <div className="container">
                                <button className="sign-in-btn" onClick={handleCreateVilla}>Create new villa</button>
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
                                        <th>Pool area (m2)</th>
                                        <th>Floors</th>
                                        <th colSpan="2">Management</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        villaList.map((villa, index) => {
                                            return (
                                                <tr key={villa.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{villa.name}</td>
                                                    <td>{villa.area}</td>
                                                    <td>{villa.rentCost}</td>
                                                    <td>{villa.maxSlot}</td>
                                                    <td>{villa.rentType}</td>
                                                    <td>{villa.roomType}</td>
                                                    <td>{villa.description}</td>
                                                    <td>{villa.poolArea}</td>
                                                    <td>{villa.floors}</td>
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
                        <>
                            <h1 className="management-title">Room List</h1>
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
                                        <th>Free present</th>
                                        <th colSpan="2">Management</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        roomList.map((room, index) => {
                                            return (
                                                <tr key={room.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{room.name}</td>
                                                    <td>{room.area}</td>
                                                    <td>{room.rentCost}</td>
                                                    <td>{room.maxSlot}</td>
                                                    <td>{room.rentType}</td>
                                                    <td>{room.freePresent}</td>
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
                    </>
                </div>
            </div>
        </>
    );
}