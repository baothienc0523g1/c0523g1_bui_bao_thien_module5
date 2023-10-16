import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
    root.render(
        <div>
            <h1>Hello bro</h1>
            <h2>It's {new Date().toLocaleDateString()}</h2>
        </div>
    )
}

setInterval(tick, 1000);