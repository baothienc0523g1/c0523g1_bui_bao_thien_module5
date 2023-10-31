import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="col-lg-8 col-md-8 left-header">
                    <div className="email-header">
                        <i className="fa fa-envelope" style={{color: "#f35525"}}></i>
                        noimandembuongxuong@gmail.com
                    </div>
                    <div className="address-header">
                        <i className="fa fa-map" style={{color:"#f35525"}}></i>
                        280 Tran Hung Dao str, Da Nang, Viet Nam
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 right-header">

                </div>
            </div>
            <div id="navbar" className="container-fluid" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Home Page</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="vertical-line"></div>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">List</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/add">Add</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link 3</a>
                                </li>
                            </ul>
                            <span className="navbar-text">“We need a six month vacation, twice a year.”</span>
                            <button className="sign-in-btn">Sign in</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}