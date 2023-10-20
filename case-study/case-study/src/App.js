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
                <CustomerList/>
                <hr/>
                <EmployeeList/>
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
