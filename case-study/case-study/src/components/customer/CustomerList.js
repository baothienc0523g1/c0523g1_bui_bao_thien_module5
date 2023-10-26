import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customerService";
import {Link} from "react-router-dom";
import {DeleteCustomerModal} from "./DeleteCustomerModal";

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteCustomer, setDeleteCustomer] = useState({});
    const [searchName, setSearchName] = useState();
    const [searchAddress, setSearchAddress] = useState();


    useEffect(() => {
        getList(searchName, searchAddress)
    }, [searchName, searchAddress])


    const getList = async (searchKeyword = "", searchAddress = "") => {
        const myList = await customerService.findAll(searchKeyword, searchAddress);
        setCustomerList(myList);
    }


    const handleSetDeleteCustomer = (customer) => {
        setDeleteCustomer(customer);
        setShowModal(true);
    }

    const handleCloseModal = async () => {
        setDeleteCustomer(null);
        setShowModal(false);
        await getList();
    }

    const handleSearchName = (name) => {
        let key = name.target.value;
        setSearchName(key);
        console.log(name);
    }

    const handleSearchAddress = (address) => {
        let key = address.target.value;
        setSearchAddress(key);
        console.log(address);
    }


    if (!customerList) {
        return null
    } else {
        return (
            <>
                <h1 className="management-title">Customer List</h1>
                <div className="container management-div">
                    <div className="float-lg-end row">
                        <input value={searchName}
                               onChange={(name) => handleSearchName(name)}
                               className="input-group-text col-lg-6"
                               placeholder={"Search with name"}
                               type="text"
                        />
                        <input value={searchAddress}
                               onChange={(address) => handleSearchAddress(address)}
                               className="input-group-text col-lg-6"
                               placeholder={"Search with address"}
                               type="text"
                        />
                    </div>
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
                        {customerList.length !== 0 ? customerList.map((customer, index) => {
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
                                        <td style={{textAlign: "center"}}>
                                            <Link to={`/customers/edit/${customer.id}`}><i
                                                className="fas fa-edit fa-lg"/></Link>
                                        </td>
                                        <td style={{textAlign: "center"}}>
                                            <a type="button"
                                               onClick={() => handleSetDeleteCustomer(customer)}><i
                                                className="fas fa-trash fa-lg" style={{color: "red"}}></i></a>
                                        </td>
                                    </tr>
                                )
                            })
                            : (<tr>
                                <td colSpan={10}><span>There is no customer: <h1> {searchName}</h1> </span></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
                <DeleteCustomerModal
                    show={showModal}
                    obj={deleteCustomer}
                    handleCloseFn={handleCloseModal}
                />
            </>
        );
    }
}

export default CustomerList;