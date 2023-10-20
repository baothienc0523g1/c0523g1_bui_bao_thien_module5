import * as customerService from "../../service/customerService";

function CustomerList() {
    return (
        <>
            <h1 className="management-title">Customer List</h1>
            <table className="table table-striped mt-2" id="customer-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Identity</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th colSpan="2">Management</th>
                </tr>
                </thead>
                <tbody>
                {
                    customerService.findAll().map((customer, index) => {
                        return (
                            <tr key={customer.id}>
                                <td>{index + 1}</td>
                                <td>{customer._name}</td>
                                <td>{customer._birthDay}</td>
                                <td>{customer._gender}</td>
                                <td>{customer._identity}</td>
                                <td>{customer._phoneNumber}</td>
                                <td>{customer._email}</td>
                                <td>{customer._customerType}</td>
                                <td>{customer._address}</td>
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

export default CustomerList;