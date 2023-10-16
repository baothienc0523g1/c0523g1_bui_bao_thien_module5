import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <form action="#">
            <table>
                <thead>
                <tr>
                    <th colSpan="2"><h1>Sign in</h1></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colSpan="2"><label htmlFor="email">Email address</label></th>
                </tr>
                <tr>
                    <td colSpan="2"><input type="email" id="email"/></td>
                </tr>
                <tr>

                    <th colSpan="2"><label htmlFor="password">Password</label></th>
                </tr>
                <tr>
                    <td colSpan="2"><input type="password" id="password"/></td>
                </tr>
                <tr>
                    <td>
                        <button className="btn" id="submit-btn" type="submit">Confirm</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>
)
