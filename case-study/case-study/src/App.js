import './App.css';
import Header from "./components/core/Header";
import Navbar from "./components/core/Navbar";
import Banner from "./components/core/Banner";
import Iframe from "./components/core/Iframe";
import ScrollToTopBtn from "./components/core/ScrollToTopBtn";
import InfoModal from "./components/core/InfoModal";
import Footer from "./components/core/Footer";
import ItemCard from "./components/core/ItemCard";
import SingUpForm from "./components/core/SignUpForm";
import CustomerList from "./components/customer/CustomerList";
import {EmployeeList} from "./components/employee/EmployeeList";
import {DeleteModal} from "./components/core/DeleteModal";
import {Route, Routes} from "react-router-dom";
import {RoomList} from "./components/facility/room/RoomList";
import {HouseList} from "./components/facility/house/HouseList";
import {VillaList} from "./components/facility/villa/VillaList";
import {ContractList} from "./components/contract/ContractList";

function App() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Banner/>
            <div className="container mt-4">
                <div className="row">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
                <SingUpForm/>
                <hr/>
                <Routes>
                    <Route path="/customers" element={<CustomerList/>}></Route>
                </Routes>
                <hr/>
                <EmployeeList/>
                <CustomerList/>
                <RoomList/>
                <HouseList/>
                <VillaList/>
                <ContractList/>
                <hr/>
            </div>
            <Iframe/>
            <ScrollToTopBtn/>
            <InfoModal/>
            <DeleteModal/>
            <Footer/>
        </>
    );
}

export default App;