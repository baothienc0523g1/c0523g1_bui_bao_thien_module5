import * as rauService from "../service/rauService";
import {toast} from "react-toastify";

export default function DeleteModal(event) {
    const {isShow, objectForDelete, handleCloseFn} = event;

    const handleDelete = async (objectForDelete) => {
        const status = await rauService.remove(objectForDelete);
        if (status === 200) {
            handleCloseFn();
            toast("Da xoa mat hang: " + objectForDelete.ten);
        }
    }
    if (!isShow) {
        return null;
    }
    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            onClick={handleCloseFn}>X</button>
                        </div>
                        <div className="modal-body">
                            <p>Are sure about remove object with name: {objectForDelete.ten} ?</p>
                            <p>Warning: This action cant be un-done!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={handleCloseFn}>Close - Cancel
                            </button>
                            <button type="button" className="btn btn-primary"
                            onClick={() => handleDelete(objectForDelete)}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}