import * as villaService from "../../../service/viilaService";

function VillaList() {
    return (
        <>
            <h1 className="management-title">Villa List</h1>
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
                    <th>Pool area</th>
                    <th>Floors</th>
                    <th colSpan="2">Management</th>
                </tr>
                </thead>
                <tbody>
                {
                    villaService.findAll().map((villa, index) => {
                        return (
                            <tr key={villa._id}>
                                <td>{index + 1}</td>
                                <td>{villa._name}</td>
                                <td>{villa._area}</td>
                                <td>{villa._rentCost}</td>
                                <td>{villa._maxSlot}</td>
                                <td>{villa._rentType}</td>
                                <td>{villa._roomType}</td>
                                <td>{villa._description}</td>
                                <td>{villa._poolArea}</td>
                                <td>{villa._floors}</td>
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