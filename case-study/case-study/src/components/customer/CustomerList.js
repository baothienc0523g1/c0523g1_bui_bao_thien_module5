import {useEffect, useState} from "react";
import * as customerService from "../../service/customerService";
import {Link} from "react-router-dom";
import {DeleteCustomerModal} from "./DeleteCustomerModal";

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteCustomer, setDeleteCustomer] = useState({});

    const getList = async () => {
        const myList = await customerService.findAll();
        setCustomerList(myList);
    }

    useEffect(() => {
        getList();
    }, [])


    const handleSetDeleteCustomer = (customer) => {
        setDeleteCustomer(customer);
        setShowModal(true);
    }

    const handleCloseModal = async () => {
        setDeleteCustomer(null);
        setShowModal(false);
        await getList();
    }


    if (customerList) {
        return (
            <>
                <h1 className="management-title">Customer List</h1>
                <div className="container management-div">
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
                            customerList.map((customer, index) => {
                                return (
                                    <tr key={customer.id}>
                                        <td>{index + 1}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.birthDay}</td>
                                        <td>{customer.gender}</td>
                                        <td>{customer.identity}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.customerType}</td>
                                        <td>{customer.address}</td>
                                        <td style={{textAlign: "center"}}><i className="fas fa-edit fa-lg">
                                            <Link to={`/edit/${customer.id}`}></Link>
                                        </i></td>
                                        <td style={{textAlign: "center"}}>
                                            <a type="button"
                                               onClick={(customer) => handleSetDeleteCustomer(customer)}><i
                                                className="fas fa-trash fa-lg" style={{color: "red"}}></i></a></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <DeleteCustomerModal
                    show={showModal}
                    obj={deleteCustomer}
                    handleCloseFn={handleCloseModal()}
                />
            </>
        );
    } else {
        return null;
    }
}

export default CustomerList;