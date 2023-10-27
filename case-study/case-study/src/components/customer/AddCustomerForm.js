import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as customerService from "../../service/customerService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function AddCustomerForm() {
    const navigate = useNavigate();
    const [genders, setGenders] = useState();
    const [customerTypes, setCustomerTypes] = useState();

    const getGender = async () => {
        let genderList = await customerService.getGender();
        await setGenders(genderList);
    }

    const getCustomerType = async () => {
        let typeList = await customerService.getCustomerType();
        await setCustomerTypes(typeList);
    }

    useEffect(() => {
        getGender();
        getCustomerType();
    }, [])

    const requiredStr = "Please fill this field!"
    const toDay = new Date();
    const eightTeenYearsOldRequirement = new Date(toDay);
    eightTeenYearsOldRequirement.setFullYear(toDay.getFullYear() - 18);

    const myValidator = {
        name: yup.string()
            .matches(/^[A-Za-z ]*$/, "Wrong name format!")
            .required(requiredStr),
        birthDay: yup.date()
            .max(eightTeenYearsOldRequirement, "Kiddo, you're too young to do this")
            .required(requiredStr),
        address: yup.string().required(requiredStr),
        email: yup.string()
            .matches(/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/, "Invalid email!")
            .required(requiredStr),
        phoneNumber: yup.string()
            .matches(/^090\d{7}$|^091\d{7}$|^\+\(84\)(90\d{7})$|^\+\(84\)(91\d{7})$|^\(84\)(91\d{7})$|^\(84\)(90\d{7})$/, "Invalid phone number format!!")
            .required(requiredStr),
        identity: yup.string()
            .matches(/^\d{9}(\d{3})?$/, "Invalid identity format, put 9 or 12 numbers into this field!!")
            .required(requiredStr),
    };


    const initValue = {
        name: "",
        birthDay: "",
        gender: JSON.stringify({
            id: 1,
            genderName: "Male"
        }),
        identity: "",
        phoneNumber: "",
        email: "",
        customerType: JSON.stringify({
            id: 1,
            typeName: "Member"
        }),
        address: ""
    };

    const handleSubmit = async (value) => {
        let fixedValue = {
            ...value,
            customerType: JSON.parse(value.customerType),
            gender: JSON.parse(value.gender)
        };
        const status = await customerService.add(fixedValue);
        if (status === 201) {
            console.log(status)
            toast("New customer added success");
            navigate("/customers")
        }
    }

    const cancel = () => {
        navigate("/customers")
    }

    if (!customerTypes || !genders) {
        return null;
    } else {
        return (
            <>
                <div id={"customer-add-form"} className="container mb-5" style={{minHeight: "650px"}}>
                    <h3 className="management-title mt-3">Add new customer</h3>
                    <hr/>
                    <Formik
                        initialValues={initValue}
                        validationSchema={yup.object(myValidator)}
                        onSubmit={(value) => handleSubmit(value)}>
                        <Form>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Customer's name<span
                                    className="required"> *</span></label>
                                <Field name="name" id="name" type="text" className="form-control"
                                       placeholder="Customer's name"/>
                                <ErrorMessage name="name" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="address" className="form-label">Customer's address<span
                                    className="required"> *</span></label>
                                <Field name="address" id="address" type="text" className="form-control"
                                       placeholder="Customer's address"/>
                                <ErrorMessage name="address" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="customerType" className="form-label">Customer type </label>
                                <Field as="select" name="customerType" id="customerType" className="form-select"
                                       aria-label="Default select example">
                                    <option disabled={true} defaultValue>Chose one</option>
                                    {customerTypes.map(type => (
                                        <option value={JSON.stringify(type)} key={type.id} label={type.typeName}/>))}
                                </Field>
                                <ErrorMessage name="customerType" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2 row">
                                <div className="col-lg-6 col-mg-6">
                                    <label htmlFor="birthDay" className=" form-label">Birthday<span
                                        className="required"> *</span></label>
                                    <Field name="birthDay" id="birthDay" type="date" className="form-control"
                                           placeholder="Customer's birthday"/>
                                    <ErrorMessage name="birthDay" component="div" className="form-err-msg"/>
                                </div>
                                <div className="col-lg-6 col-mg-6">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <Field as="select" name="gender" id="gender" className="form-select"
                                           aria-label="Default select example">
                                        <option disabled={true} defaultValue>Chose one</option>
                                        {genders.map(g => (
                                            <option value={JSON.stringify(g)} key={g.id} label={g.genderName}/>))}
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="form-err-msg"/>
                                </div>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="email" className="form-label"> Customer' s email<span
                                    className="required"> *</span></label>
                                <Field name="email" id="email" type="email" className="form-control"
                                       placeholder="ex. abc@gmail.com"/>
                                <ErrorMessage name="email" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2 row">
                                <div className="col-lg-6">
                                    <label htmlFor="phoneNumber" className="form-label">Phone number<span
                                        className="required"> *</span></label>
                                    <Field name="phoneNumber" id="phoneNumber" type="tel" className="form-control"
                                           placeholder="starting with 09, with 10 numbers"/>
                                    <ErrorMessage name="phoneNumber" component="div" className="form-err-msg"/>
                                </div>

                                <div className="col-lg-6">
                                    <label htmlFor="identity" className="form-label">Personal ID number<span
                                        className="required"> *</span></label>
                                    <Field name="identity" id="identity" type="number" className="form-control"
                                           placeholder="with 9 or 12 numbers"/>
                                    <ErrorMessage name="identity" component="div" className="form-err-msg"/>
                                </div>
                            </div>

                            <div className="mb-2 row">
                                <button onClick={cancel} type="button"
                                        className="btn btn-outline-info mb-1 col-lg-6 col-md-6">
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
}