import * as contractService from "../../service/contractService";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {DeleteContractModal} from "./DeleteContractModal";
import {getParsedDate} from "../../utilities/getParseDay";

export function ContractList() {
    const [showModal, setShowModal] = useState(false);
    const [contractForDelete, setContractForDelete] = useState();
    const [contractList, setContractList] = useState();
    const [contractSearchName, setContracSearchtName] = useState("");
    const navigate = useNavigate();

    const getList = async (contractSearchName = "") => {
        const myList = await contractService.findAll(contractSearchName);
        await setContractList(myList);
    }

    useEffect(() => {
        getList(contractSearchName);
    }, [contractSearchName]);

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

    const handleSearchContract = (keyword) => {
        setContracSearchtName(keyword.target.value);
    }

    const handleResetKeyword = () => {
        setContracSearchtName("");
    }
    if (!contractList) {
        return null
    } else {
        return (
            <div className="container management-div">
                <h1 className="management-title">Contract List</h1>
                <button className="sign-in-btn" onClick={handleGetFormCreateContract}>Create new contract</button>
                <button
                    className="btn btn-outline-info float-lg-end"
                    onClick={handleResetKeyword}
                >Reset
                </button>
                <input
                    value={contractSearchName}
                    onChange={(value) => handleSearchContract(value)}
                    className="input-group-text float-lg-end"
                    type="text"/>

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
                    {contractList.length !== 0 ? contractList.map((contract, index) => {
                            return (
                                <tr key={contract.id}>
                                    <td>{index + 1}</td>
                                    <td>{contract.name}</td>
                                    <td>{getParsedDate(contract.startDate)}</td>
                                    <td>{getParsedDate(contract.endDate)}</td>
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
                        : (<tr>
                            <td colSpan={9}>There is no contract name: {contractSearchName}</td>
                        </tr>)}
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