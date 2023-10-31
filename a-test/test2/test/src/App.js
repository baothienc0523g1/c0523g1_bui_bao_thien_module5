import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import {Route, Routes} from "react-router";
import Add from "./components/Add";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path={"/"} element={<List/>}/>
          <Route path={"/add"} element={<Add/>}/>
      </Routes>
    </>
  );
}

export default App;
