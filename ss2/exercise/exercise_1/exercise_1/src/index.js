import './index.css';
import ReactDOM from "react-dom/client";

const students = [
    {
        id: 1,
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        id: 2,
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        id: 3,
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        id: 4,
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        id: 5,
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        id: 6,
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Student Manager</h1>
        <table>
            <thead>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student) => (
                <tr key={student.id}>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);


