import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as customerService from "../../service/customerService";
import {toast} from "react-toastify";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function EditCustomerForm() {
    const navigate = useNavigate();
    const {customerId} = useParams();
    const [existedCustomer, setExistedCustomer] = useState();
    const getEditCustomer = async () => {
        const getEditCustomer = await customerService.findById(customerId);
        setExistedCustomer(getEditCustomer)
    }

    useEffect(() => {
        getEditCustomer();
    }, [])

    const myValidator = {
        name: yup.string()
            .matches(/^[A-Za-z]*$/, "Wrong name format!")
            .required(),
        address: yup.string().required(),
        birthday: yup.string()
            .matches(/^\d{4}\-\d{2}\-\d{2}$/, "wrong birthday format!")
            .required(),
        email: yup.string()
            .matches(/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/, "Invalid email!")
            .required(),
        phone: yup.string()
            .matches(/^090\d{7}$|^091\d{7}$|^\(84\)(90\d{7})$|^\(84\)(91\d{7})$/, "Invalid phone number format!!")
            .required(),
        identity: yup.string()
            .matches(/^\d{9}(\d{3})?$/, "Invalid identity format, put 9 to 12 numbers into this field!!")
            .required(),
        gender: yup.string().required()
    };

    const handleEdit = (value) => {
        const status = customerService.edit(value);
        if (status === 200) {
            console.log(status)
            toast("Customer is edited");
            navigate("/customers")
        }
    }

    const customerType = [
        {typeValue: 1, typeName: "Member"},
        {typeValue: 2, typeName: "Silver"},
        {typeValue: 3, typeName: "Gold"},
        {typeValue: 4, typeName: "Platinum"},
        {typeValue: 5, typeName: "Diamond"}
    ];

    const gender = [
        {genderValue: 1, genderName: "Male"},
        {genderValue: 2, genderName: "Female"},
        {genderValue: 3, genderName: "Other"},
    ];


    return (
        <>
            <div id={"customer-add-form"} className="container mb-5" style={{minHeight: "650px"}}>
                <h3 className="management-title mt-3">Edit customer</h3>
                <hr/>
                <Formik
                    initialValues={existedCustomer}
                    validationSchema={yup.object(myValidator)}
                    onSubmit={(value) => handleEdit(value)}>
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">Customer's name<span className="required"> *</span></label>
                            <Field type="text" className="form-control" name={"name"} id="name" placeholder="Customer's name"/>
                            <ErrorMessage name="name" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="address" className="form-label">Customer's address<span className="required"> *</span></label>
                            <Field type="text" className="form-control" name={"address"} id="address" placeholder="Customer's address"/>
                            <ErrorMessage name="address" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="customerType" className="form-label">Customer type </label>
                            <select className="form-select" aria-label="Default select example" id="customerType">
                                <option disabled={true} selected={true}>Chose one</option>
                                {customerType.map(type => (<option value={type.typeValue}>{type.typeName}</option>))}
                            </select>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6 col-mg-6">
                                <label htmlFor="birthday" className=" form-label">Birthday<span className="required"> *</span></label>
                                <Field type="date" className="form-control" name={"birthday"} id="birthday" placeholder=" Customer's birthday"/>
                                <ErrorMessage name="birthday" component="div" className="form-err-msg"/>
                            </div>
                            <div className="col-lg-6 col-mg-6">
                                <label htmlFor="customerGender" className="form-label">Gender</label>
                                <select className="form-select" aria-label="Default select example" id="customerGender">
                                    <option disabled={true} selected={true}>Chose one</option>
                                    {gender.map(g => (<option value={g.genderValue}>{g.genderName}</option>))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email" className="form-label"> Customer' s email<span className="required"> *</span></label>
                            <Field type="email" className="form-control" name={"email"} id="email" placeholder="ex. abc@gmail.com"/>
                            <ErrorMessage name="email" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6">
                                <label htmlFor="phone" className="form-label">Phone number<span className="required"> *</span></label>
                                <Field type="tel" className="form-control" name={"phone"} id="phone" placeholder="starting with 09, with 10 numbers"/>
                                <ErrorMessage name="phone" component="div" className="form-err-msg"/>
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="identity" className="form-label">Personal ID number<span className="required"> *</span></label>
                                <Field type="number" className="form-control" name={"identity"} id="identity" placeholder="with 9 or 12 numbers"/>
                                <ErrorMessage name="identity" component="div" className="form-err-msg"/>
                            </div>
                        </div>

                        <div className="mb-2 row">
                            <button type={"button"} className="btn btn-outline-info mb-1 col-lg-6 col-md-6">
                                <Link className={"link-tag"} to={"/customers"}>Cancel</Link>
                            </button>
                            <button type={"submit"} className="btn btn-outline-primary mb-1 col-lg-6 col-md-6">
                                Confirm
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}