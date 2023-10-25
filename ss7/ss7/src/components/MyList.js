import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAll, removeUser} from "../redux/middleware/UserMiddleware";
import {ButtonShowList} from "./ButtonShowList";
import {ButtonRemove} from "./ButtonRemove";

export function MyList() {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll())
    }, []);

    async function handleDelete(id) {
        dispatch(removeUser(id));
    }

    if (!users) {
        return null
    } else {
        return (
            <>
                <div className="container mt-5 d-flex">
                    {ButtonShowList("Get users list")}
                </div>
                <div className="container">
                    <table className="table table-striped mt-5">
                        <thead className="table table-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        {
                                            ButtonRemove("Remove", handleDelete(user.id))
                                        }
                                    </td>
                                </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}