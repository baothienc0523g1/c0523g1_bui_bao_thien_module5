function Modal() {
    return (
        <div>
            <div className="modal fade" id="infoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                 aria-labelledby="infoModalDropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="infoModalDropLabel" style={{fontWeight: "bold"}}>Villa
                                Information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus nesciunt non
                            praesentium
                            quasi ratione repellat reprehenderit sapiente veritatis. Ex fugiat modi molestiae mollitia
                            unde.
                            Alias dolorem eligendi officiis placeat.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                 aria-labelledby="deleteModalDropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h1 className="modal-title fs-5" id="deleteModalDropLabel"
                                style={{fontWeight: "bold", color: "red"}}>
                                <i className="fas fa-exclamation-triangle"></i>
                                Remove Facility</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <strong>
                                Are you sure to remove Facility with name: <span></span>
                            </strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;