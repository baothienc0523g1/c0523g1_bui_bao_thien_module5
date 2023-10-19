function Modal() {
    return (
        <div>
            <!--Info modal start-->
            <div class="modal fade" id="infoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                 aria-labelledby="infoModalDropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="infoModalDropLabel" style="font-weight: bold">Villa
                                Information</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus nesciunt non
                            praesentium
                            quasi ratione repellat reprehenderit sapiente veritatis. Ex fugiat modi molestiae mollitia
                            unde.
                            Alias dolorem eligendi officiis placeat.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Info modal end-->

            <!--Delete modal start-->
            <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                 aria-labelledby="deleteModalDropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">

                            <h1 class="modal-title fs-5" id="deleteModalDropLabel"
                                style="font-weight: bold; color: red">
                                <i class="fas fa-exclamation-triangle"></i>
                                Remove Facility</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <strong>
                                Are you sure to remove Facility with name: <span></span>
                            </strong>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Delete modal end-->
        </div>
    )
}
export default Modal;