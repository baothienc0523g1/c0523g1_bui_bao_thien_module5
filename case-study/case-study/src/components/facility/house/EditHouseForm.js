import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as houseService from "../../../service/facilities/houseService";
import {useEffect, useState} from "react";

export function EditHouseForm() {
    const navigate = useNavigate();
    const [existedHouse, setExistedHouse] = useState();
    const {houseId} = useParams();

    const getHouse = async () => {
        let house = await houseService.findById(houseId);
        await setExistedHouse(house);
    }

    useEffect(() => {
        getHouse();
    }, [])


    const requiredStr = "Please fill this field!";
    const invalidValue = "Invalid value, please try again!";

    const myValidator = {
        name: yup.string().required(requiredStr),
        area: yup.number().min(0, invalidValue).required(requiredStr),
        rentCost: yup.number().min(0, invalidValue).required(requiredStr),
        maxSlot: yup.number().min(0, invalidValue).required(requiredStr),
        rentType: yup.string().required(requiredStr),
        roomType: yup.string().required(requiredStr),
        description: yup.string().required(requiredStr),
    }

    const handleEdit = async (value) => {
        console.log("onsubmit")
        let status = await houseService.edit(value);
        if (status === 200) {
            toast("OKE OKE OKE")
            navigate("/facilities");
        }
    }

    const cancel = () => {
        navigate(`/facilities/`)
    }

    if (!existedHouse) {
        return null;
    }

    return (
        <>
            <div id={"customer-add-form"} className="container mb-5" style={{minHeight: "650px"}}>
                <h3 className="management-title mt-3">Edit House</h3>
                <hr/>
                <Formik
                    initialValues={existedHouse}
                    validationSchema={yup.object(myValidator)}
                    onSubmit={(value) => {
                        handleEdit(value)
                    }}
                >
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">House's name<span className="required"> *</span></label>
                            <Field name="name" id="name" type="text" className="form-control" placeholder="House's name"/>
                            <ErrorMessage name="name" component="div" className="form-err-msg"/>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6">
                                <label htmlFor="area" className="form-label">House's area (square metre)<span className="required"> *</span></label>
                                <Field name="area" id="area" type="number" className="form-control" placeholder="House's area"/>
                                <ErrorMessage name="area" component="div" className="form-err-msg"/>
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="rentCost" className="form-label">Rent cost ($)<span className="required"> *</span></label>
                                <Field name="rentCost" id="rentCost" type="number" className="form-control" placeholder="Rent cost"/>
                                <ErrorMessage name="rentCost" component="div" className="form-err-msg"/>
                            </div>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6">
                                <label htmlFor="maxSlot" className="form-label">Max slot<span className="required"> *</span></label>
                                <Field name="maxSlot" id="maxSlot" type="number" className="form-control" placeholder="House's max slot"/>
                                <ErrorMessage name="maxSlot" component="div" className="form-err-msg"/>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="rentType" className="form-label">Rent type<span className="required"> *</span></label>
                                <Field name="rentType" id="rentType" type="text" className="form-control"/>
                                <ErrorMessage name="rentType" component="div" className="form-err-msg"/>
                            </div>
                        </div>

                        <div className="mb-2 row">
                            <div className="col-lg-6">
                                <label htmlFor="floors" className="form-label">Floors<span className="required"> *</span></label>
                                <Field name="floors" id="floors" type="number" className="form-control" placeholder="House's floors"/>
                                <ErrorMessage name="floors" component="div" className="form-err-msg"/>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="roomType" className="form-label">Room type<span className="required"> *</span></label>
                                <Field name="roomType" id="roomType" type="text" className="form-control"/>
                                <ErrorMessage name="roomType" component="div" className="form-err-msg"/>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="description" className="form-label">Description<span className="required"> *</span></label>
                            <Field name="description" id="description" component="textarea" className="form-control" placeholder="Something about this house"/>
                            <ErrorMessage name="description" component="div" className="form-err-msg"/>
                        </div>


                        <div className="mb-2 row">
                            <button onClick={cancel} type="button" className="btn btn-outline-info mb-1 col-lg-6 col-md-6">
                                Cancel
                            </button>
                            <button type={"submit"} className="btn btn-outline-primary mb-1 col-lg-6 col-md-6">
                                Confirm
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}