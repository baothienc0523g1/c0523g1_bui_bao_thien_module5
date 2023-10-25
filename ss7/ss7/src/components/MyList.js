import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../redux/middleware/UserMiddleware";
import {ButtonShowList} from "./ButtonShowList";
import {ButtonRemove} from "./ButtonRemove";
import DeleteModal from "./DeleteModal";

export function MyList() {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [userForDelete, setUserForDelete] = useState({});

    useEffect(() => {
        dispatch(getAll())
    }, []);

    const handleModal = (user) => {
        setShow(true);
        setUserForDelete(user)
    }

    const closeModal = () => {
        setShow(false);
        setUserForDelete(null);
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
                                            ButtonRemove("Remove", handleModal(user))
                                        }
                                    </td>
                                </tr>)
                        }
                        </tbody>
                    </table>
                </div>
                <DeleteModal
                    show={show}
                    select={userForDelete}
                    handleClose={closeModal}
                ></DeleteModal>
            </>
        );
    }
}