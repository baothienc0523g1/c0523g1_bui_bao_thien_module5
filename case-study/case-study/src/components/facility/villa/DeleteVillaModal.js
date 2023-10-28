import * as villaService from "../../../service/facilities/viilaService";
import {toast} from "react-toastify";

export function DeleteVillaModal(villa) {
    const {show, obj, handleCloseFn} = villa;

    const handleDelete = async (obj) => {
        let status = await villaService.remove(obj);
        if (status === 200) {
            handleCloseFn();
            toast("Removed villa with name: " + obj.name);

        } else {
            toast.error("Error while removing villa");
        }
    }

    if (!show) {
        return null;
    } else {
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
                                <p>Are sure about remove villa with name: {obj.name}?</p>
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
}