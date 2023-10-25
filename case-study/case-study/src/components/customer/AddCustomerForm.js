import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as customerService from "../../service/customerService";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";

export function AddCustomerForm() {
    const navigate = useNavigate();
    // const myValidator = {
    //     name: yup.string()
    //         .matches(/^[A-Za-z]*$/, "Wrong name format!")
    //         .required(),
    //     address: yup.string().required(),
    //     birthday: yup.string()
    //         .matches(/^\d{4}\-\d{2}\-\d{2}$/, "wrong birthday format!")
    //         .required(),
    //     email: yup.string()
    //         .matches(/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/, "Invalid email!")
    //         .required(),
    //     phone: yup.string()
    //         .matches(/^090\d{7}$|^091\d{7}$|^\(84\)(90\d{7})$|^\(84\)(91\d{7})$/, "Invalid phone number format!!")
    //         .required(),
    //     identity: yup.string()
    //         .matches(/^\d{9}(\d{3})?$/, "Invalid identity format, put 9 to 12 numbers into this field!!")
    //         .required(),
    //     gender: yup.string().required()
    // };

    const initValue = {
        name: "",
        birthDay: "",
        gender: 0,
        identity: "",
        phoneNumber: "",
        email: "",
        customerType: 0,
        address: ""
    };

    const handleSubmit = async (value) => {
        const status = await customerService.add(value);
        if (status === 201) {
            console.log(status)
            toast("New customer added success");
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

    const cancel = () => {
        navigate("/customers")
    }

    return (
        <>
            <div id={"customer-add-form"} className="container mb-5" style={{minHeight: "650px"}}>
                <h3 className="management-title mt-3">Add new customer</h3>
                <hr/>
                <Formik
                    initialValues={initValue}
                    validationSchema={yup.object(null)}
                    onSubmit={(value) => handleSubmit(value)}>
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
                                <option disabled={true} selected={true}>Chose one</option>
                                {customerType.map(type => (<option value={type.typeValue} key={type.typeValue} label={type.typeName}/>))}
                            </Field>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6 col-mg-6">
                                <label htmlFor="birthDay" className=" form-label">Birthday<span className="required"> *</span></label>
                                <Field name="birthDay" id="birthDay" type="date" className="form-control" placeholder="Customer's birthday"/>
                                <ErrorMessage name="birthday" component="div" className="form-err-msg"/>
                            </div>
                            <div className="col-lg-6 col-mg-6">
                                <label htmlFor="customerGender" className="form-label">Gender</label>
                                <Field as="select" name="gender" id="customerGender" className="form-select" aria-label="Default select example">
                                    <option disabled={true} selected={true}>Chose one</option>
                                    {gender.map(g => (<option value={g.genderName} key={g.genderValue} label={g.genderName}/>))}
                                </Field>
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
                                <ErrorMessage name="phone" component="div" className="form-err-msg"/>
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="identity" className="form-label">Personal ID number<span className="required"> *</span></label>
                                <Field name="identity" id="identity"  type="number" className="form-control" placeholder="with 9 or 12 numbers"/>
                                <ErrorMessage name="identity" component="div" className="form-err-msg"/>
                            </div>
                        </div>

                        <div className="mb-2 row">
                            <button onClick={cancel} type="button" className="btn btn-outline-info mb-1 col-lg-6 col-md-6">
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-outline-primary mb-1 col-lg-6 col-md-6">Confirm
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
}