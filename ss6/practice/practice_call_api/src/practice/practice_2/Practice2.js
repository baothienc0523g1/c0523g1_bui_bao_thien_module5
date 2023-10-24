import {Component} from "react";
import axios from "axios";


export class Practice2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    };

    componentDidMount() {
        axios
            .get("http://localhost:3001/api/users")
            .then(response => {
                this.setState({users: response.data})
            })
            .catch(err => {
                throw err;
            });
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}> {user.name} </li>
                    ))}
                </ul>
            </div>
        );
    }
}