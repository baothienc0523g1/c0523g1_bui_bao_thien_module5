import './App.css';
import Header from "./components/core/Header";
import ScrollToTopBtn from "./components/core/ScrollToTopBtn";
import InfoModal from "./components/core/InfoModal";
import Footer from "./components/core/Footer";
import CustomerList from "./components/customer/CustomerList";
import {EmployeeList} from "./components/employee/EmployeeList";
import {DeleteModal} from "./components/core/DeleteModal";
import {Route, Routes} from "react-router-dom";
import {ContractList} from "./components/contract/ContractList";
import {FacilitiesList} from "./components/facility/FacilitiesList";
import {MainPageBody} from "./components/core/MainPageBody";
import {AddCustomerForm} from "./components/customer/AddCustomerForm";
import {EditCustomerForm} from "./components/customer/EditCustomerForm";
import {AddContractForm} from "./components/contract/AddContractForm";
import {EditContractForm} from "./components/contract/EditContractForm";
import {MyNavBar} from "./components/core/MyNavBar";

function App() {
    return (
        <>
            <Header/>
            <MyNavBar/>
            <Routes>
                <Route path="/" element={<MainPageBody/>}/>
                <Route path="/employees" element={<EmployeeList/>}></Route>
                <Route path="/facilites" element={<FacilitiesList/>}></Route>
                <Route path="/contracts" element={<ContractList/>}></Route>
                <Route path="/contracts/add/" element={<AddContractForm/>}></Route>
                <Route path="/contracts/edit/:contractId" element={<EditContractForm/>}></Route>
                <Route path="/customers" element={<CustomerList/>}></Route>
                <Route path="/customers/add" element={<AddCustomerForm/>}></Route>
                <Route path="/customers/edit/:customerId" element={<EditCustomerForm/>}></Route>
            </Routes>
            <ScrollToTopBtn/>
            <InfoModal/>
            <DeleteModal/>
            <Footer/>
        </>
    );
}

export default App;