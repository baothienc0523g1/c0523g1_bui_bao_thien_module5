import './App.css';
import Header from "./components/core/Header";
import ScrollToTopBtn from "./components/core/ScrollToTopBtn";
import InfoModal from "./components/core/InfoModal";
import Footer from "./components/core/Footer";
import CustomerList from "./components/customer/CustomerList";
import {EmployeeList} from "./components/employee/EmployeeList";
import {DeleteModal} from "./components/core/DeleteModal";
import {Link, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import {ContractList} from "./components/contract/ContractList";
import {FacilitiesList} from "./components/facility/FacilitiesList";
import {MainPageBody} from "./components/core/MainPageBody";
import {AddCustomerForm} from "./components/customer/AddCustomerForm";
import {EditCustomerForm} from "./components/customer/EditCustomerForm";

function App() {
    const navigate = useNavigate();
    const signUp = () => {
        navigate("/sign-up")
    }
    return (
        <>
            <Header/>
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
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/employees">Employee</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/facilites">Facility</NavLink>
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
            <Routes>
                <Route path="/" element={<MainPageBody/>}/>
                <Route path="/customers" element={<CustomerList/>}></Route>
                <Route path="/employees" element={<EmployeeList/>}></Route>
                <Route path="/facilites" element={<FacilitiesList/>}></Route>
                <Route path="/contracts" element={<ContractList/>}></Route>
                <Route path="/sign-up" element={<AddCustomerForm/>}></Route>
                <Route path="/customer/edit/:customerId" element={<EditCustomerForm/>}></Route>
            </Routes>
            <ScrollToTopBtn/>
            <InfoModal/>
            <DeleteModal/>
            <Footer/>
        </>
    );
}

export default App;