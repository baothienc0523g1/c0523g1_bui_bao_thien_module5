import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as productService from "../service/productService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {options} from "axios";
import {useEffect, useState} from "react";
import * as productTypeService from "../service/productTypeService";


export default function Add() {
    const requiredStr = "Vui long dien vao truong nay";
    const invalidValue = "Gia tri khong hop le!";
    const listUnit = ["Kg", "Bao", "Bo"];
    const [listType, setListType] = useState();
    const navigate = useNavigate();

    const getTypeList = async () => {
        const typeList = await productTypeService.getAll();
        setListType(typeList);
    }

    useEffect(() => {
        getTypeList();
    }, [])

    const init = {
        ma: "",
        ten: "",
        don_vi: "",
        gia: "",
        loaiHang: JSON.stringify({
            id: 1,
            ten: "Rau"
        }),
        ngayThuHoach: "",
    }

    const myValidation = {
        ma: yup.string().required(requiredStr),
        ten: yup.string().required(requiredStr),
        donVi: yup.string().required(requiredStr),
        gia: yup.number().required(requiredStr).min(0, invalidValue),

        ngayThuHoach: yup.date().required()
    }

    const handleSubmit = async (value) => {
        let fixedValue = {
            ...value,
            loaiHang: JSON.parse(value.loaiHang),
        };
        const status = await productService.add(fixedValue);
        if (status === 201) {
            toast("success!");
            navigate("/")
        }
    }
    if (!listType) {
        return null;
    }
    return (
        <div className="container" id="body">
            <div className="container" style={{height: "650px"}} id="form-body">
                <h3 className="management-title mt-3">Add new customer</h3>
                <hr/>
                <Formik
                    initialValues={init}
                    validationSchema={yup.object(myValidation)}
                    onSubmit={(value) => handleSubmit(value)}
                >
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="ma" className="form-label">Ma hang hoa</label>
                            <Field type="text" name="ma" className="form-control" id="ma"/>
                            <ErrorMessage name="ma" id="ma" component="div" className="err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="ten" className="form-label">Ten hang hoa</label>
                            <Field type="text" name="ten" className="form-control" id="ten" placeholder="Ten hang hoa"/>
                            <ErrorMessage name="ten" component="div" className="err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="donVi" className="form-label">Don vi tinh</label>
                            <Field as="select" name="donVi" className="form-select" aria-label="Default select example" id="donVi">
                                {
                                    listUnit.map((unit) => {
                                        return (
                                            <option value={unit} label={unit} key={unit}/>
                                        )
                                    })
                                }
                            </Field>
                            <ErrorMessage name="donVi" component="div" className="err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="gia" className="form-label">Gia</label>
                            <Field name="gia" type="number" className="form-control" id="gia"/>
                            <ErrorMessage name="gia" component="div" className="err-msg"/>
                        </div>


                        <div className="mb-2">
                            <label htmlFor="loaiHang" className="form-label">Loai hang</label>
                            <Field as="select" type="number" name="loaiHang" className="form-control">
                                {listType.map((item) => {
                                        return (
                                            <option key={item.id} label={item.ten} value={JSON.stringify(item)}/>)
                                })}
                            </Field>

                        </div>

                        <div className="mb-2">
                            <label htmlFor="ngayThuHoach" className="form-label">Ngay thu hoach</label>
                            <Field name="ngayThuHoach" type="date" className="form-control" id="ngayThuHoach"/>
                        </div>


                        <button type="button" style={{width: "49.6%"}} className="btn btn-outline-info mb-1">Cancel
                        </button>
                        <button type="submit" style={{width: "49.5%"}} className="btn btn-outline-primary mb-1">Confirm
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}