import * as houseService from "../../../service/houseService.js";

export function HouseList() {
    return (
        <>
            <h1 className="management-title">House List</h1>
            <table className="table table-striped mt-2" id="customer-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Rent cost</th>
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
                    houseService.findAll().map((house, index) => {
                        return (
                            <tr key={house._id}>
                                <td>{index + 1}</td>
                                <td>{house._name}</td>
                                <td>{house._area}</td>
                                <td>{house._rentCost}</td>
                                <td>{house._maxSlot}</td>
                                <td>{house._rentType}</td>
                                <td>{house._roomType}</td>
                                <td>{house._description}</td>
                                <td>{house._floors}</td>
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
        </>
    );
}