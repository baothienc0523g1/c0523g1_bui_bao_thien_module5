'use strict';
import {Component} from "react";
import StudentList from "./StudentList";
class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    <StudentList/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;