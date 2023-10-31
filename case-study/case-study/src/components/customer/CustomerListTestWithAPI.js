import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customerServiceWithAPI";
import {Link} from "react-router-dom";
import {DeleteCustomerModalWithAPI} from "./DeleteCustomerModalWithAPI";
import {getParsedDate} from "../../utilities/getParseDay";

function CustomerListTestWithAPI() {
    //handle list
    const [customerList, setCustomerList] = useState([]);
    //handle modal
    const [showModal, setShowModal] = useState(false);
    const [deleteCustomer, setDeleteCustomer] = useState({});
    //handle search
    const [searchName, setSearchName] = useState("");
    const [typeSearch, setTypeSearch] = useState("");
    const [typeList, setTypeList] = useState([]);

    //list
    useEffect(() => {
        getTypeList();
        getList(searchName, typeSearch)
    }, [searchName, typeSearch])


    const getList = async (searchKeyword = "", searchType = "") => {
        const res = await customerService.findAllAPI(searchKeyword, searchType);
        await setCustomerList(res.data);
    }

    const getTypeList = async () => {
        const data = await customerService.getCustomerType();
        await setTypeList(data);
    }

    //modal
    const handleSetDeleteCustomer = (customer) => {
        setDeleteCustomer(customer);
        setShowModal(true);
    }

    const handleCloseModal = async () => {
        setDeleteCustomer(null);
        setShowModal(false);
        await getList();
    }

    //search
    const handleSearchName = (name) => {
        let key = name.target.value;
        setSearchName(key);
    }

    const handleChangeType = (typeName) => {
        let key = typeName.target.value;
        setTypeSearch(key);
    }

    const keywordReset = () => {
        const emptyStr = "";
        setTypeSearch(emptyStr);
        setSearchName(emptyStr);
    }


    return (
        <>
            <h1 className="management-title">Customer List</h1>
            <div className="container management-div">
                <div className="float-lg-end row">
                    <input value={searchName}
                           onChange={(name) => handleSearchName(name)}
                           className="input-group-text col-lg-5"
                           placeholder={"Search with name"}
                           type="text"
                    />
                    <select value={typeSearch} onChange={(value) => handleChangeType(value)}
                            className="form-select col-lg-3" style={{width: "30%"}}>
                        {
                            typeList.map((item) => {
                                return (
                                    <option key={item} value={item.typeName} label={item.typeName}/>
                                )
                            })
                        }
                    </select>
                    <button
                        className="btn btn-outline-info col-lg-2"
                        onClick={keywordReset}>Reset
                    </button>
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
                    {customerList.length > 0 ? customerList.map((customer, index) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{getParsedDate(customer.birthDay)}</td>
                                    <td>{customer.gender.genderName}</td>
                                    <td>{customer.identity}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.customerType.typeName}</td>
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
                            <td colSpan={10}>
                                <span>There is no data with keyword: <h1> {searchName}</h1> </span>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <DeleteCustomerModalWithAPI
                show={showModal}
                obj={deleteCustomer}
                handleCloseFn={handleCloseModal}
            />
        </>
    );
}

export default CustomerListTestWithAPI;