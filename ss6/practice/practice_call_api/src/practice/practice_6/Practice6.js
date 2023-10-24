import React, {Component} from "react";
import axios from "axios";
import async from "async";

export class Practice6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    };

    componentDidMount() {
        try {
            const getUser = axios.get("http://localhost:3001/api/users")
            const getArticle = axios.get("http://localhost:3001/api/articles")

            axios
                .all([getUser, getArticle])
                .then(
                    axios.spread((res1, res2) => {
                        const users = res1.data.map(user => {
                            return {
                                ...user,
                                article: res2.data.filter(item => {
                                    return item.user_id === user.id;
                                })
                            };
                        });
                        this.setState({users: users});
                    })
                )
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <h1>Users</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Article number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.article.length}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}