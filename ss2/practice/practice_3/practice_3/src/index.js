import ReactDOM from "react-dom/client";

const name = "thien";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <h1 style={{textAlign: "center"}}>
        {name}
    </h1>
)