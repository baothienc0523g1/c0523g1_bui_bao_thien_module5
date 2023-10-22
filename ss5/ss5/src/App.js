import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./practice/practice_5/components/Category";
import Product from "./practice/practice_5/components/Product";
import MyForm from "./practice/practice_4/MyForm";
import ContactForm from "./exercise/ContactForm";
import MedicForm from "./exercise/MedicForm";

function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Category/>}/>
        //         <Route path="/product/:categoryId" element={<Product/>}/>
        //     </Routes>
        // </BrowserRouter>
        <MedicForm/>
    );
}

export default App;
