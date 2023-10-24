import {Component} from "react";
import axios from 'axios';

export class Users extends Component {
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
                this.setState({
                    users: response.data
                });
            })
            .catch(err => {
                throw err
            });
    }

    handleCreate = () => {
        window.location.href = "/user/add";
    }

    render() {
        const {users} = this.state;
        return (
            <>
                <h1>Users</h1>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            <a href={`/user/${user.id}`}>{user.name}</a>
                        </div>
                    )
                })}
                <button type={"button"} onChange={this.handleCreate}>Create</button>
            </>
        );
    }
}