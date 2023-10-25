import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MyList} from "./components/MyList";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MyList/>}/>
        </Routes>
    );
}

export default App;