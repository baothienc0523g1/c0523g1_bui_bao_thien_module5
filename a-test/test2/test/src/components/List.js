import {useEffect, useState} from "react";
import * as rauService from "../service/rauService";
import {get} from "axios";
import DeleteModal from "./DeleteModal";

export default function List() {
    const [list, setList] = useState();
    // handle modal
    const [isShow, setIsShow] = useState(false);
    const [objectForDelete, setObjForDelete] = useState();

    const getList = async () => {
        const data = await rauService.getAll();
        await setList(data);
    }
    useEffect(() => {
        getList();
    }, [isShow])

    const handleCloseModal = () => {
        setIsShow(false);
        setObjForDelete(null);
    }

    const handleShowModal = (event) => {
        setIsShow(true);
        setObjForDelete(event);
    }




    if (!list) {
        return null;
    } else {
        return (
            <>
                <div className="container" id="list-body" style={{height: "650px"}}>
                    <h3 className="management-title mt-3">Management</h3>
                    <table className="table mt-3">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Ma</th>
                            <th>Ten</th>
                            <th>Don vi</th>
                            <th>Gia</th>
                            <th>Ngay thu hoach</th>
                            <th>Loai hang hoa</th>
                            <th colSpan="2" style={{textAlign: "center"}}>Link</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.ma}</td>
                                        <td>{item.ten}</td>
                                        <td>{item.donVi}</td>
                                        <td>{item.gia}</td>
                                        <td>{item.ngayThuHoach}</td>
                                        <td>{item.loaiHangHoa.ten}</td>
                                        <td style={{textAlign: "center"}}><i className="fas fa-edit fa-lg"></i></td>
                                        <td style={{textAlign: "center"}}>
                                            <a type="button" onClick={() => handleShowModal(item)}><i
                                            className="fas fa-trash fa-lg"></i></a></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <DeleteModal
                        isShow={isShow}
                        objectForDelete={objectForDelete}
                        handleCloseFn={handleCloseModal}
                    />
                </div>
            </>
        )
    }
}