import './App.css';
import {List} from "./exercise2/List";
import {Route, Routes} from "react-router-dom";
import {Add} from "./exercise2/Add";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Edit} from "./exercise2/Edit";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/edit/:bookId" element={<Edit/>}/>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
