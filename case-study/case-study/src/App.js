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
import {MainPageBody} from "./components/core/MainPageBody";
import {AddCustomerForm} from "./components/customer/AddCustomerForm";
import {EditCustomerForm} from "./components/customer/EditCustomerForm";
import {AddContractForm} from "./components/contract/AddContractForm";
import {EditContractForm} from "./components/contract/EditContractForm";
import {MyNavBar} from "./components/core/MyNavBar";
import {FacilitiesTable} from "./components/facility/FacilitiesTable";
import {AddVillaForm} from "./components/facility/villa/AddVillaForm";
import {EditVillaForm} from "./components/facility/villa/EditVillaForm";
import {Error} from "./components/core/Error";
import {AddHouseForm} from "./components/facility/house/AddHouseForm";
import {EditHouseForm} from "./components/facility/house/EditHouseForm";
import {EditRoomForm} from "./components/facility/room/EditRoomForm";
import {AddRoomForm} from "./components/facility/room/AddRoomForm";

function App() {
    return (
        <>
            <Header/>
            <MyNavBar/>
            <Routes>
                <Route path="/" element={<MainPageBody/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/facilities" element={<FacilitiesTable/>}/>

                <Route path="/contracts" element={<ContractList/>}/>
                <Route path="/contracts/add/" element={<AddContractForm/>}/>
                <Route path="/contracts/edit/:contractId" element={<EditContractForm/>}/>

                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/customers/add" element={<AddCustomerForm/>}/>
                <Route path="/customers/edit/:customerId" element={<EditCustomerForm/>}/>

                <Route path="/rooms/add" element={<AddRoomForm/>}/>
                <Route path="/rooms/edit/:roomId" element={<EditRoomForm/>}/>

                <Route path="/houses/add" element={<AddHouseForm/>}/>
                <Route path="/houses/edit/:houseId" element={<EditHouseForm/>}/>

                <Route path="/villas/add" element={<AddVillaForm/>}/>
                <Route path="/villas/edit/:villaId" element={<EditVillaForm/>}/>

                <Route path="/*" element={<Error/>}/>
            </Routes>
            <ScrollToTopBtn/>
            <InfoModal/>
            <DeleteModal/>
            <Footer/>
        </>
    );
}

export default App;