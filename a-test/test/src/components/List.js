import {useEffect, useState} from "react";
import * as productService from "../service/productService";

export default function List() {
    const [list, setList] = useState();
    const [keyword, setKeyword] = useState("");

    const getList = async (keyword) => {
        const data = await productService.getAll(keyword);
        await setList(data);
    }

    useEffect(() => {
        getList(keyword);
    }, [keyword])

    const handleKeyword = (keyword) => {
        setKeyword(keyword.target.value)
    }

    const resetKeyword = () => {
        setKeyword("");
    }

    const handleShowModal = (item) => {
        
    }
    if (!list) {
        return null;
    }
    return (
        <>
            <div className="container" id="list-body" style={{height: "650px"}}>
                <h3 className="management-title mt-3">Management</h3>
                <input onChange={value => handleKeyword(value)} value={keyword} type="text"
                       className="input-group-text float-lg-end"/>
                <button onClick={resetKeyword} className={"btn btn-outline-info float-lg-end"}>Reset</button>
                <table className="table mt-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Link</th>
                        <th>Link</th>
                        <th>Link</th>
                        <th>Link</th>
                        <th>Link</th>
                        <th>Link</th>
                        <th colSpan="2" style={{textAlign: "center"}}>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.length !== 0 ? (list.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.ma}</td>
                                    <td>{item.ten}</td>
                                    <td>{item.donVi}</td>
                                    <td>{item.gia}</td>
                                    <td>{item.loaiHang.ten}</td>
                                    <td>{item.ngayThuHoach}</td>
                                    <td style={{textAlign: "center"}}><i className="fas fa-edit fa-lg"></i></td>
                                    <td style={{textAlign: "center"}}><a type="button" onClick={(item) => handleShowModal(item)}><i
                                        className="fas fa-trash fa-lg"></i></a></td>
                                </tr>
                            );
                        })) : (<tr>
                            <td colSpan={8}>Khong co du lieu voi tu khoa: {keyword}</td>
                        </tr>)
                    }
                    </tbody>
                </table>

            </div>

        </>
    )
}