import React, {useEffect, useState} from "react";
import {getVillaList} from "../../service/facilities/viilaService";
import {getRoomList} from "../../service/facilities/roomService";
import {getHouseList} from "../../service/facilities/houseService";
import {Link, useNavigate} from "react-router-dom";
import {DeleteVillaModal} from "./villa/DeleteVillaModal";
import {DeleteHouseModal} from "./house/DeleteHouseModal";
import {DeleteRoomModal} from "./room/DeleteRoomModal";

export function FacilitiesTable() {
    /*init*/
    const [roomList, setRoomList] = useState();
    const [houseList, setHouseList] = useState();
    const [villaList, setVillaList] = useState();
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const listOfType = ["rooms", "houses", "villas"];
    const [typeOfList, setTypeOfList] = useState("rooms");

    const getRooms = async (keyword = "") => {
        const rooms = await getRoomList(keyword);
        setRoomList(rooms);
    }
    const getHouses = async (keyword = "") => {
        const houses = await getHouseList(keyword);
        setHouseList(houses);
    }
    const getVillas = async (keyword = "") => {
        const villas = await getVillaList(keyword);
        setVillaList(villas);
    }

    const getAllFacilities = async (keyword) => {
        getRooms(keyword);
        getHouses(keyword);
        getVillas(keyword);
    }

    useEffect(() => {
        getAllFacilities(keyword)
    }, [keyword])

    /*room handle*/
    const [roomModalShow, setRoomModalShow] = useState(false);
    const [roomObjForDelete, setRoomObjForDelete] = useState();
    const handleCloseRoomModal = async () => {
        setRoomModalShow(false);
        setRoomObjForDelete(null);
        await getRooms();
    }
    const handleShowRoomModal = (value) => {
        setRoomModalShow(true);
        setRoomObjForDelete(value);
    }

    const handleCreateRoom = () => {
        navigate("/rooms/add")
    }
    /*villa handle*/
    const [villaModalShow, setVillaModalShow] = useState(false);
    const [villaObjForDelete, setVillaObjForDelete] = useState();
    const handleShowVillaModal = (obj) => {
        setVillaModalShow(true);
        setVillaObjForDelete(obj);
    }
    const handleCloseVillaModal = async () => {
        setVillaModalShow(false);
        setVillaObjForDelete(null);
        await getAllFacilities();
    }
    const handleCreateVilla = () => {
        navigate("/villas/add");
    }


    /*house handle*/
    const [houseModalShow, setHouseModalShow] = useState(false);
    const [houseObjForDelete, setHouseObjForDelete] = useState();
    const handleCreateHouse = () => {
        navigate("/houses/add");
    }
    const handleShowHouseModal = (obj) => {
        setHouseObjForDelete(obj);
        setHouseModalShow(true);
    }
    const handleCloseHouseModal = () => {
        setHouseObjForDelete(null);
        setHouseModalShow(false);
        getAllFacilities()
    }

    /*handle table when type typeOfList change */
    const handleChangeType = (type) => {
        setTypeOfList(type)
    }

    function resetKeyword() {
        setKeyword("");
    }

    /*render*/
    if (!roomList || !houseList || !villaList) {
        return null;
    }


    return (
        <>
            <div className="container mt-5">
                {
                    listOfType.map((type, index) => {
                        return (
                            <button id="chose-facility"
                                    onClick={() => handleChangeType(type)}
                                    className="btn btn-outline-info"
                                    style={type === typeOfList ? {
                                        backgroundColor: '#0dcaf0',
                                        color: "white",
                                        transition: ".7s"
                                    } : {}}
                                    key={index}>
                                {type.toUpperCase()}
                            </button>
                        )
                    })
                }
            </div>
            <div className="management-div">
                <div className="container">
                    <>
                        {typeOfList === 'rooms' && <>
                            <h1 className="management-title">Room List</h1>
                            <div className="container">
                                <button className="sign-in-btn" onClick={handleCreateRoom}>Create new room</button>
                                <button className="btn btn-outline-info float-lg-end" onClick={resetKeyword}>Reset
                                </button>
                                <input type="text" className="input-group-text float-lg-end"
                                       value={keyword}
                                       onChange={(keyword => setKeyword(keyword.target.value))}
                                       placeholder={"Search with name"}/>
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
                                                    <td style={{textAlign: "center"}}>
                                                        <Link to={`/rooms/edit/${room.id}`}>
                                                            <i className="fas fa-edit fa-lg"></i>
                                                        </Link>
                                                    </td>
                                                    <td style={{textAlign: "center"}}><a
                                                        type="button"
                                                        onClick={() => handleShowRoomModal(room)}><i
                                                        className="fas fa-trash fa-lg"
                                                        style={{color: "red"}}></i></a></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                <DeleteRoomModal
                                    show={roomModalShow}
                                    obj={roomObjForDelete}
                                    handleCloseFn={handleCloseRoomModal}/>
                            </div>
                        </>}
                        {typeOfList === 'houses' && <>
                            <h1 className="management-title">House List</h1>
                            <div className="container">
                                <button className="sign-in-btn" onClick={handleCreateHouse}>Create new house</button>
                                <button className="btn btn-outline-info float-lg-end" onClick={resetKeyword}>Reset
                                </button>
                                <input type="text" className="input-group-text float-lg-end"
                                       value={keyword}
                                       onChange={(keyword => setKeyword(keyword.target.value))}
                                       placeholder={"Search with name"}/>
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
                                        houseList ? (houseList.map((house, index) => {
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
                                                        <td style={{textAlign: "center"}}>
                                                            <Link to={`/houses/edit/${house.id}`}>
                                                                <i className="fas fa-edit fa-lg">
                                                                </i>
                                                            </Link>
                                                        </td>
                                                        <td style={{textAlign: "center"}}>
                                                            <a
                                                                type={"button"}
                                                                onClick={() => handleShowHouseModal(house)}>
                                                                <i className="fas fa-trash fa-lg"
                                                                   style={{color: "red"}}>
                                                                </i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            }))
                                            : () => {
                                                return (<tr>
                                                    <td colSpan={10}>
                                                        There is no data with keyword: {keyword}
                                                    </td>
                                                </tr>)
                                            }
                                    }
                                    </tbody>
                                </table>
                                <DeleteHouseModal
                                    show={houseModalShow}
                                    obj={houseObjForDelete}
                                    handleCloseFn={handleCloseHouseModal}/>
                            </div>
                        </>}
                        {typeOfList === 'villas' && <>
                            <h1 className="management-title">Villa List</h1>
                            <div className="container">
                                <button className="sign-in-btn" onClick={handleCreateVilla}>Create new villa</button>
                                <button className="btn btn-outline-info float-lg-end" onClick={resetKeyword}>Reset
                                </button>
                                <input type="text" className="input-group-text float-lg-end"
                                       value={keyword}
                                       onChange={(keyword => setKeyword(keyword.target.value))}
                                       placeholder={"Search with name"}/>
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
                                                    <td style={{textAlign: "center"}}>
                                                        <Link to={`/villas/edit/${villa.id}`}>
                                                            <i className="fas fa-edit fa-lg">
                                                            </i>
                                                        </Link>
                                                    </td>
                                                    <td style={{textAlign: "center"}}>
                                                        <a
                                                            type={"button"}
                                                            onClick={() => handleShowVillaModal(villa)}>
                                                            <i className="fas fa-trash fa-lg"
                                                               style={{color: "red"}}>
                                                            </i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                <DeleteVillaModal
                                    show={villaModalShow}
                                    obj={villaObjForDelete}
                                    handleCloseFn={handleCloseVillaModal}
                                />
                            </div>
                        </>}
                    </>
                </div>
            </div>
        </>
    );
}