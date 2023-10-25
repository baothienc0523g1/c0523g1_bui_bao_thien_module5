import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as customerService from "../../service/customerService";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function EditCustomerForm() {
    const navigate = useNavigate();
    const {customerId} = useParams();
    const [existedCustomer, setExistedCustomer] = useState();

    useEffect(() => {
        console.log("mount: " + existedCustomer)
        getEditCustomer();
        console.log("mount2:" + existedCustomer)
    }, [])

    const getEditCustomer = async () => {
        try {
            const getEditCustomer = await customerService.findById(customerId);
            await setExistedCustomer( getEditCustomer)
            await console.log("async -> await: " + existedCustomer)
        } catch (err) {

        }
    }

    const myValidator = {
        name: yup.string()
            .matches(/^[A-Za-z ]*$/, "Wrong name format!")
            .required(),
        address: yup.string().required(),
        birthDay: yup.string()
            .matches(/^\d{4}\-\d{2}\-\d{2}$/, "Wrong birthday format!")
            .required(),
        email: yup.string()
            .matches(/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/, "Invalid email!")
            .required(),
        phoneNumber: yup.string()
            .matches(/^090\d{7}$|^091\d{7}$|^\(84\)(90\d{7})$|^\(84\)(91\d{7})$/, "Invalid phone number format!!")
            .required(),
        identity: yup.string()
            .matches(/^\d{9}(\d{3})?$/, "Invalid identity format, put 9 to 12 numbers into this field!!")
            .required(),
        gender: yup.string().required(),
        customerType: yup.string().required(),
    };

    const handleEdit = async (value) => {
        const status = await customerService.edit(value);
        console.log("handle edit active")
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

    const cancelEdit = () => {
        navigate("/customers");
    }

    if (!existedCustomer) {
        console.log("render() null -> customer is undefined");
        return null
    } else {
        console.log("render() run -> customer is exist")
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
                                <Field name="name" id="name" type="text" className="form-control" placeholder="Customer's name"/>
                                <ErrorMessage name="name" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="address" className="form-label">Customer's address<span className="required"> *</span></label>
                                <Field name="address" id="address" type="text" className="form-control"  placeholder="Customer's address"/>
                                <ErrorMessage name="address" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="customerType" className="form-label">Customer type </label>
                                <Field as="select" name="customerType" id="customerType" className="form-select" aria-label="Default select example">
                                    <option disabled={true} defaultValue>Chose one</option>
                                    {customerType.map(type => (<option value={type.typeValue} key={type.typeValue} label={type.typeName}/>))}
                                </Field>
                                <ErrorMessage name="customerType" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2 row">
                                <div className="col-lg-6 col-mg-6">
                                    <label htmlFor="birthDay" className=" form-label">Birthday<span className="required"> *</span></label>
                                    <Field name="birthDay" id="birthDay" type="date" className="form-control" placeholder="Customer's birthday"/>
                                    <ErrorMessage name="birthDay" component="div" className="form-err-msg"/>
                                </div>
                                <div className="col-lg-6 col-mg-6">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <Field as="select" name="gender" id="gender" className="form-select" aria-label="Default select example">
                                        <option disabled={true} defaultValue>Chose one</option>
                                        {gender.map(g => (<option value={g.genderName} key={g.genderValue} label={g.genderName}/>))}
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="form-err-msg"/>
                                </div>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="email" className="form-label"> Customer' s email<span className="required"> *</span></label>
                                <Field name="email" id="email" type="email" className="form-control" placeholder="ex. abc@gmail.com"/>
                                <ErrorMessage name="email" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2 row">
                                <div className="col-lg-6">
                                    <label htmlFor="phoneNumber" className="form-label">Phone number<span className="required"> *</span></label>
                                    <Field name="phoneNumber" id="phoneNumber" type="tel" className="form-control"  placeholder="starting with 09, with 10 numbers"/>
                                    <ErrorMessage name="phoneNumber" component="div" className="form-err-msg"/>
                                </div>

                                <div className="col-lg-6">
                                    <label htmlFor="identity" className="form-label">Personal ID number<span className="required"> *</span></label>
                                    <Field name="identity" id="identity"  type="number" className="form-control" placeholder="with 9 or 12 numbers"/>
                                    <ErrorMessage name="identity" component="div" className="form-err-msg"/>
                                </div>
                            </div>

                            <div className="mb-2 row">
                                <button type="submit" className="btn btn-outline-primary mb-1 col-lg-6 col-md-6">
                                    Confirm
                                </button>
                                <button type="button" className="btn btn-outline-info mb-1 col-lg-6 col-md-6"
                                        onClick={cancelEdit}>
                                    Cancel
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </>
        );
    }
}