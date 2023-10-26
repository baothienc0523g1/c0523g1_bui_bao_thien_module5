import * as contractService from "../../service/contractService";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {DeleteContractModal} from "./DeleteContractModal";

export function ContractList() {
    const [showModal, setShowModal] = useState(false);
    const [contractForDelete, setContractForDelete] = useState();
    const [contractList, setContractList] = useState();
    const navigate = useNavigate();

    const getList = async () => {
        const myList = await contractService.findAll();
        await setContractList(myList);
    }

    useEffect(() => {
        getList();
    }, []);

    const handleGetFormCreateContract = () => {
        navigate("/contracts/add")
    }

    const handleShowModal = (contract) => {
        setContractForDelete(contract);
        setShowModal(true);
    }
    const handleCloseModal = async () => {
        setContractForDelete(null);
        setShowModal(false);
        await getList();
    }


    if (!contractList) {
        return null
    } else {
        return (
            <div className="container management-div">
                <h1 className="management-title">Contract List</h1>
                <button className="sign-in-btn" onClick={handleGetFormCreateContract}>Create new contract</button>
                <table className="table table-striped mt-2" id="customer-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Contract No.</th>
                        <th>Start day</th>
                        <th>End day</th>
                        <th>Deposit ($)</th>
                        <th>Total pay ($)</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contractList.map((contract, index) => {
                            return (
                                <tr key={contract.id}>
                                    <td>{index + 1}</td>
                                    <td>{contract.name}</td>
                                    <td>{contract.startDate}</td>
                                    <td>{contract.endDate}</td>
                                    <td>{contract.deposit}</td>
                                    <td>{contract.totalPay}</td>
                                    <td style={{textAlign: "center"}}>
                                        <Link to={`/contracts/edit/${contract.id}`}><i
                                            className="fas fa-edit fa-lg"/></Link>
                                    </td>
                                    <td style={{textAlign: "center"}}>
                                        <a type="button" onClick={() => handleShowModal(contract)}>
                                            <i className="fas fa-trash fa-lg" style={{color: "red"}}></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <DeleteContractModal
                    show={showModal}
                    obj={contractForDelete}
                    handleCloseFn={handleCloseModal}/>
            </div>
        );
    }
}