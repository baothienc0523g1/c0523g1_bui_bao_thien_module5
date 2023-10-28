import {remove} from "../../../service/facilities/roomService";
import {toast} from "react-toastify";

export function DeleteRoomModal(value) {
    const {show, obj, handleCloseFn} = value;

    const handleDelete = async (obj) => {
        const status = await remove(obj)
        if (status === 200) {
            handleCloseFn();
            toast("Room with name: " + obj.name + " is removed");
        } else {
            await handleCloseFn;
            toast.warn("Something wrong here, go check check");
        }
    }

    if (!show) {
        return null;
    } else {
        return (
            <div className="modal" tabIndex="-1" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={handleCloseFn}></button>
                        </div>
                        <div className="modal-body">
                            <p>Are sure about remove room with name: {obj.name}?</p>
                            <p>Warning: This action cant be un-done!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={handleCloseFn}>Close - Cancel
                            </button>
                            <button type="button" className="btn btn-primary"
                                    onClick={() => handleDelete(obj)}
                            >Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}