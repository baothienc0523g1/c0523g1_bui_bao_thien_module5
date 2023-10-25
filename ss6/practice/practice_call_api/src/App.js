import './App.css';
import {List} from "./exercise2/components/List";
import {Route, Routes} from "react-router-dom";
import {Add} from "./exercise2/components/Add";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Edit} from "./exercise2/components/Edit";
import {Exercise1} from "./exercise1/Exercise1";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/edit/:bookId" element={<Edit/>}/>
            </Routes>
            {/*<Exercise1/>*/}
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
