import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as service from "./service/service";
import {findBookObjById} from "./service/service";
import {toast} from "react-toastify";

export async function Edit() {
    let {bookId} = useParams();
    const [existedBook, setExistedBook] = useState();
    const navigate = useNavigate();

    console.log(bookId);
    const getBook = async () => {
        const obj = await findBookObjById(bookId);
        setExistedBook(obj);
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

    const handleSubmit = async (value) => {
        const status = await service.edit(value.id, value)
        if (status === 200) {
            toast("Sua thanh kong");
            navigate("/");
        }
    }

    useEffect(() => {
        getBook()
    }, []);


    if (!existedBook) {
        return null;
    } else {
        return (
            <>
                <div className={"exercise-2"}>
                    <div className="container">
                        <Formik
                            initialValues={existedBook}
                            onSubmit={(value) => handleSubmit(value)}
                            validationSchema={yup.object(validateObj)}>
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
}