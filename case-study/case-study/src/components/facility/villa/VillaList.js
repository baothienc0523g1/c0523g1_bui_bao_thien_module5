import {useEffect, useState} from "react";
import * as villaService from "../../../service/facilities/viilaService"
import {getVillaList} from "../../../service/facilities/viilaService";

export function VillaList() {
    const [villas, setVillas] = useState();

    useEffect(() => {
        getVillaList()
    }, [])

    const getVillaList = async () => {
        const villaList = await villaService.getVillaList();
        await setVillas(villaList);
    }

    if (!villas) {
        return (<h1>NO DATA</h1>);
    } else {
        return (
            <>
                <h1 className="management-title">Villa List</h1>
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
                            <th>Pool area (square metre)</th>
                            <th>Floors</th>
                            <th colSpan="2">Management</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            villas.map((villa, index) => {
                                return (
                                    <tr key={villa._id}>
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
                                        <td style={{textAlign: "center"}}><i className="fas fa-edit fa-lg"></i></td>
                                        <td style={{textAlign: "center"}}><a type="button" data-bs-toggle="modal"
                                                                             data-bs-target="#deleteModal"><i
                                            className="fas fa-trash fa-lg" style={{color: "red"}}></i></a></td>
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
}