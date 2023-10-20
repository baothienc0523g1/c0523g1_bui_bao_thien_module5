export function DeleteModal() {
    return(
        <div>
            <div className="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1"
                 aria-labelledby="deleteModalDropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h1 className="modal-title fs-5" id="deleteModalDropLabel"
                                style={{fontWeight: "bold", color: "red"}}>
                                <i className="fas fa-exclamation-triangle"></i>
                                Remove Facility</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <strong>
                                Are you sure to remove item with name: <span></span>
                            </strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}