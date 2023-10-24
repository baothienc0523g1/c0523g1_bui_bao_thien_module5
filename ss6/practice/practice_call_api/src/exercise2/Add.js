import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as yup from "yup";
import {toast} from "react-toastify";
import * as service from "./service/service";
import {findById} from "./service/service";


export function Add() {
    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        let status = await service.add(value);
        console.log("---------------------------" + status)
        if (status === 201) {
            toast.success("Them moi thanh kong");
            navigate("/");
        }
    }

    const init = {
        title: "",
        author: "",
        quantity: 0
    }

    const requiredStr = "Khong duoc de trong";
    const invalidQuantity = "So luong khong hop le";

    const validateObj = {
        title: yup.string().required(requiredStr),
        author: yup.string().required(requiredStr),
        quantity: yup
            .number()
            .required(requiredStr)
            .min(0, invalidQuantity)
    }

    return (
        <>
            <div className={"exercise-2"}>
                <div className="container">
                    <Formik
                        initialValues={init}
                        validationSchema={yup.object(validateObj)}
                        onSubmit={(value) => handleSubmit(value)}>
                        <Form>
                            <div><label htmlFor="title">Title</label></div>
                            <div><Field name={"title"} id={"title"} type={"text"}/></div>
                            <ErrorMessage name={"title"} component={"div"} className={"err-msg"}/>

                            <div><label htmlFor="author">Author</label></div>
                            <div><Field name={"author"} id={"author"} type={"text"}/></div>
                            <ErrorMessage name={"author"} component={"div"} className={"err-msg"}/>

                            <div><label htmlFor="quantity">Quantity</label></div>
                            <div><Field name={"quantity"} id={"quantity"} type={"text"}/></div>
                            <ErrorMessage name={"quantity"} component={"div"} className={"err-msg"}/>

                            <div>
                                <button type={"submit"} className={"btn btn-outline-success"}>Submit</button>
                            </div>
                            <div>
                                <button type={"button"} className={"btn btn-outline-secondary"}><Link
                                    to="/">Cancel</Link></button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
}