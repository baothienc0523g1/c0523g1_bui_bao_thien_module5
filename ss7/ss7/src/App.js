import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./practice1/components/Login";

function User() {
    return null;
}

function App() {
  return (
      // eslint-disable-next-line no-undef
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}
export default App;