
function Navbar() {
    return (
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
                                <a className="nav-link" href="#">Customer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Facility</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contract</a>
                            </li>
                        </ul>
                        <span className="navbar-text">“We need a six month vacation, twice a year.”</span>
                        <button className="sign-in-btn">Sign in</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;