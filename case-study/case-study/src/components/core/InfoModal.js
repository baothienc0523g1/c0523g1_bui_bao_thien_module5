function InfoModal() {
    return (
        <div>
            <div className="modal fade" id="infoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
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
        </div>
    )
}
export default InfoModal;