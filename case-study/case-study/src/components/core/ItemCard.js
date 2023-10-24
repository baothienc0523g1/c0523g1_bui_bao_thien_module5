import {Component} from "react";

function ItemCard(props) {

    return (
        <div className="col-lg-4 col-mg-6">
            <div className="card mb-4">
                <img src="https://vntimetravel.com/media/wysiwyg/Intercontinantal-Phu-Quoc-r.jpg"
                     className="card-img-top"
                     alt="..."/>
                <div className="card-body">
                    <h3 className="card-text" style={{textAlign: "center"}}>{props.name}</h3>
                    <h5 className="card-text">Room size: {props.area} square metre</h5>
                    <div className="card-btn mt-3">
                        <div>
                            <button className="btn btn-outline-secondary" type="button" data-bs-toggle="modal"
                                    data-bs-target="#infoModal">Info
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary">Rent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;