import * as roomService from "../../../service/facilities/roomService";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getRoomList} from "../../../service/facilities/roomService";

export function RoomList() {
    const [roomList, setRoomList] = useState();
    const navigate = useNavigate();

    const getRooms = async () => {
        const rooms = await getRoomList();
        setRoomList(rooms);
    }

    useEffect(() => {
        getRooms()
    }, [])

    if (!roomList) {
        return null
    }
    return (
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
                                        type="button"><i
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
    )

}