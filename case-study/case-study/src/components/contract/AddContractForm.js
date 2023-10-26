import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as contractService from "../../service/contractService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function AddContractForm() {
    const navigate = useNavigate();

    const requiredStr = "Please fill this field!!!"
    const myValidator = {
        name: yup.string()
            .matches(/^HD\d{1,9}$/, "Wrong contract name format!")
            .required(requiredStr),
        startDate: yup.string()
            .matches(/^\d{4}\-\d{2}\-\d{2}$/, "Wrong contract date format!")
            .required(requiredStr),
        endDate: yup.string()
            .matches(/^\d{4}\-\d{2}\-\d{2}$/, "Wrong contract date format!")
            .required(requiredStr),
        deposit: yup.number()
            .min(0,"Deposit can't be below zero like that bro")
            .required(requiredStr),
        totalPay: yup.number()
            .min(0, "Total pay can't be below zero like that bro")
            .required(requiredStr)
    };

    const initValue = {
        name: "",
        startDate: "",
        endDate: "",
        deposit: 0,
        totalPay: 0
    };

    const handleSubmit = async (value) => {
        const status = await contractService.add(value);
        if (status === 201) {
            toast("New contract is added to list!!");
            console.log(status);
            navigate("/contracts");
        } else {
            toast.warn("Something wrong here, contact admin for more information!");
            console.log(status);
            navigate("/contracts");
        }
    }


    const cancel = () => {
        navigate("/contracts")
    }


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
                            <label htmlFor="name" className="form-label">Contract No#<span className="required"> *</span></label>
                            <Field name="name" id="name" type="text" className="form-control" placeholder="Contract No."/>
                            <ErrorMessage name="name" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="startDate" className="form-label">Start day<span className="required"> *</span></label>
                            <Field name="startDate" id="startDate" type="date" className="form-control"  placeholder="Contract start day"/>
                            <ErrorMessage name="startDate" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="endDate" className="form-label">End day<span className="required"> *</span></label>
                            <Field name="endDate" id="endDate" type="date" className="form-control"  placeholder="Contract end day"/>
                            <ErrorMessage name="endDate" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6 col-mg-6">
                                <label htmlFor="deposit" className="form-label">Deposit <span className="required"> *</span></label>
                                <Field name="deposit" id="deposit" type="number" className="form-control" placeholder="Deposit"/>
                                <ErrorMessage name="deposit" component="div" className="form-err-msg"/>
                            </div>
                            <div className="col-lg-6 col-mg-6">
                                <label htmlFor="totalPay" className="form-label">Total pay <span className="required"> *</span></label>
                                <Field name="totalPay" id="totalPay" type="number" className="form-control" placeholder="Total pay"/>
                                <ErrorMessage name="totalPay" component="div" className="form-err-msg"/>
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