import * as contractService from "../../service/contractService"
import {toast} from "react-toastify";

export function DeleteContractModal(contract) {
    const {show, obj, handleCloseFn} = contract;

    const handleDelete = async (obj) => {
        let status = await contractService.remove(obj.id);
        if (status === 200) {
            toast("Contract with name: " + obj.name + " is removed!!");
            handleCloseFn();
        } else {
            toast.warn("Something wrong while remove contract!")
        }
    }

    if (!show) return null;
    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={handleCloseFn}></button>
                        </div>
                        <div className="modal-body">
                            <p>Are sure about remove contract with name: {obj.name}?</p>
                            <p style={{color: "red"}}>Warning: This action cant be un-done!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={handleCloseFn}>Close - Cancel
                            </button>
                            <button type="button" className="btn btn-primary"
                                    onClick={() => handleDelete(obj)}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}