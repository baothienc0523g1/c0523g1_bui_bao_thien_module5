import {NavLink, useNavigate} from "react-router-dom";

export function MyNavBar() {
    const navigate = useNavigate();
    const signUp = () => {
        navigate("/customers/add")
    }
    return (
        <div id="navbar" className="container-fluid" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home Page</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="vertical-line"></div>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/customers">Customer</NavLink>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <NavLink className="nav-link" to="/employees">Employee</NavLink>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/facilities">Facility</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contracts">Contract</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">“We need a six month vacation, twice a year.”</span>
                        <button className="sign-in-btn" onClick={signUp}>Sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}