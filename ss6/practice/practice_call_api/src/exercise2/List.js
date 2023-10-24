import {useEffect, useState} from "react";
import axios from "axios";
import * as service from "./service/service";
import {Link, useNavigate} from "react-router-dom";
import {findById} from "./service/service";
import {toast} from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function List() {
    const [bookList, setBookList] = useState([]);

    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState();

    const handleClose = () => {
        setShow(false);
    };

    const handleCloseAndDelete = async () => {
        let status = await service.remove(deleteId);
        if (status === 200) {
            toast("xoa thanh cong")
            setShow(false)
        } else {
            toast("Loi~!")
        }
    };

    const handleShow = async (bookId) => {
        setDeleteId(bookId);
        setShow(true);
        console.log(bookId)
    };

    const getList = async () => {
        const myList = await service.getAll()
        console.log(myList)
        setBookList([
            ...myList
        ]);
    };


    useEffect(() => {
        getList()
    }, [])


    return (
        <>
            <div className="exercise-2">
                <div className="container">
                    <h3>Library</h3>
                    <button className="btn btn-outline-dark"><Link to="add">Add new book</Link></button>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light">
                            <tr>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Author</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                bookList.map((book) =>
                                    (<tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.quantity}</td>
                                        <td>{book.author}</td>
                                        <td>
                                            <button className="btn btn-outline-info">
                                                <Link to={`/edit/${book.id}`}>Edit</Link>

                                            </button>
                                        </td>
                                        <td>
                                            <Button className="btn btn-outline-warning"
                                                    variant={"primary"} onClick={() => handleShow(book.id)}>Delete
                                            </Button>
                                        </td>
                                    </tr>)
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xoa</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ban co chac muon xoa?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huy
                    </Button>
                    <Button variant="primary" onClick={handleCloseAndDelete}>
                        Xac nhan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}