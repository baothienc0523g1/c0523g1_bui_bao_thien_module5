import * as yup from "yup";
import * as rauService from "../service/rauService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export default function Add() {
    const navigate = useNavigate();
    const [typeList, setTypeList] = useState();
    const getTypeList = async () => {
        const data = await rauService.getTypeList();
        await setTypeList(data);
    }

    useEffect(() => {
        getTypeList();
    }, [])

    const init = {
        ma: "",
        ten: "",
        donVi: "",
        gia: 0,
        ngayThuHoach: "",
        loaiHangHoa: JSON.stringify({
            id: 1,
            ten: "Rau"
        })
    }

    const requiredStr = "Vui long dien truong nay";
    const invalidVal = "Gia tri khong hop le";
    const today = new Date().getDate();
    const myValidation = {
        ma: yup.string().required(requiredStr),
        ten: yup.string().required(requiredStr),
        donVi: yup.string().required(requiredStr),
        gia: yup.number().min(0, invalidVal).required(requiredStr),
        ngayThuHoach: yup.date().nonNullable().min(today)
    }

    const handleSubmit = async (event) => {
        const fixedValue = {
            ...event,
            loaiHangHoa: JSON.parse(event.loaiHangHoa)
        }
        const status = await rauService.add(fixedValue);
        if (status === 201) {
            toast("them thanh kong");
            navigate("/")
        }
    }

    const handleCancelAdd = () => {
        navigate("/")
    }

    if (!typeList) {
        return null;
    }

    return (
        <div className="container" id="body">
            <div className="container" style={{height: "650px"}} id="form-body">
                <h3 className="management-title mt-3">Add</h3>
                <hr/>
                <Formik
                    initialValues={init}
                    validationSchema={yup.object(myValidation)}
                    onSubmit={(event => handleSubmit(event))}>
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="ma" className="form-label">Ma</label>
                            <Field name="ma" id="ma" type="text" className="form-control"/>
                            <ErrorMessage name="ma" component="div"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ten" className="form-label">Ten</label>
                            <Field name="ten" id="ten" type="text" className="form-control"/>
                            <ErrorMessage name="ten" component="div"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="gia" className="form-label">Gia</label>
                            <Field name="gia" id="gia" type="number" className="form-control"/>
                            <ErrorMessage name="gia" component="div"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ngayThuHoach" className="form-label">Gia</label>
                            <Field name="ngayThuHoach" id="ngayThuHoach" type="date" className="form-control"/>
                            <ErrorMessage name="ngayThuHoach" component="div"/>
                        </div>


                        <div className="mb-2">
                            <label htmlFor="donVi" className="form-label">Don vi tinh</label>
                            <Field as="select" name="donVi" id="donVi" className="form-select"
                                   aria-label="Default select example">
                                <option selected={true} disabled={true}>----</option>
                                <option value="Rau">KG</option>
                                <option value="Cu">Bo</option>
                                <option value="Qua">Bao</option>
                            </Field>
                            <ErrorMessage name="donVi" component="div"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="loaiHangHoa" className="form-label">Loai hang hoa</label>
                            <Field id="loaiHangHoa" name="loaiHangHoa" as="select" className="form-control">
                                {
                                    typeList.map(item => {
                                        return (
                                            <option value={JSON.stringify({item})} key={item.id} label={item.ten}/>
                                        )
                                    })
                                }
                            </Field>
                            <ErrorMessage name="loaiHangHoa" component="div"/>
                        </div>

                        <button type="button" onClick={handleCancelAdd} style={{width: "49.6%"}}
                                className="btn btn-outline-info mb-1">Cancel
                        </button>
                        <button type="submit" style={{width: "49.6%"}} className="btn btn-outline-primary mb-1">Confirm
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}