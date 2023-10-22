import * as roomService from "../../../service/roomService";

export function RoomList() {
    return (
        <>
            <h1 className="management-title">Room List</h1>
            <div className="container">
                <table className="table table-striped mt-3" id="customer-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Rent cost</th>
                        <th>Max slot</th>
                        <th>Rent type</th>
                        <th>Free present</th>
                        <th colSpan="2">Management</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        roomService.findAll().map((room, index) => {
                            return (
                                <tr key={room._id}>
                                    <td>{index + 1}</td>
                                    <td>{room._name}</td>
                                    <td>{room._area}</td>
                                    <td>{room._rentCost}</td>
                                    <td>{room._maxSlot}</td>
                                    <td>{room._rentType}</td>
                                    <td>{room._freePresent}</td>
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