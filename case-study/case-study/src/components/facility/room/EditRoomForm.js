import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as roomService from "../../../service/facilities/roomService";
import {useEffect, useState} from "react";

export function EditRoomForm() {
    const navigate = useNavigate();
    const [existedRoom, setExistedRoom] = useState();
    const {roomId} = useParams();

    const getRoomForEdit = async () => {
        let room = await roomService.findById(roomId);
        await setExistedRoom(room);
    }

    useEffect(() => {
        getRoomForEdit();
    }, []);

    const requiredStr = "Please fill this field!";
    const invalidValue = "Invalid value, please try again!";

    const myValidator = {
        name: yup.string().required(requiredStr),
        area: yup.number().min(0, invalidValue).required(requiredStr),
        rentCost: yup.number().min(0, invalidValue).required(requiredStr),
        maxSlot: yup.number().min(0, invalidValue).required(requiredStr),
        rentType: yup.string().required(requiredStr),
        freePresent: yup.string().required(requiredStr),
    }

    const handleSubmit = async (value) => {
        console.log("onsubmit")
        let status = await roomService.edit(value);
        if (status === 200) {
            toast("Room with name: " + value.name + " is edited!");
            navigate("/facilities");
        }
    }

    const cancel = () => {
        navigate("/facilities")
    }

    if (!existedRoom) {
        return null;
    } else {
        return (
            <>
                <div id={"customer-add-form"} className="container mb-5" style={{minHeight: "650px"}}>
                    <h3 className="management-title mt-3">Add new room</h3>
                    <hr/>
                    <Formik
                        initialValues={existedRoom}
                        validationSchema={yup.object(myValidator)}
                        onSubmit={(value) => {
                            handleSubmit(value).then(r => {
                                console.log(value.toString())
                                console.log("submit");
                            })
                        }}>
                        <Form>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Room's name<span className="required"> *</span></label>
                                <Field name="name" id="name" type="text" className="form-control" placeholder="Room's name"/>
                                <ErrorMessage name="name" component="div" className="form-err-msg"/>
                            </div>

                            <div className="mb-2 row">
                                <div className="col-lg-6">
                                    <label htmlFor="area" className="form-label">Room's area (square metre)<span className="required"> *</span></label>
                                    <Field name="area" id="area" type="number" className="form-control" placeholder="Room's area"/>
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
                                    <Field name="maxSlot" id="maxSlot" type="number" className="form-control" placeholder="Room's max slot"/>
                                    <ErrorMessage name="maxSlot" component="div" className="form-err-msg"/>
                                </div>

                                <div className="col-lg-6">
                                    <label htmlFor="rentType" className="form-label">Rent type<span className="required"> *</span></label>
                                    <Field name="rentType" id="rentType" type="text" className="form-control"/>
                                    <ErrorMessage name="rentType" component="div" className="form-err-msg"/>
                                </div>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="freePresent" className="form-label">Free present<span className="required"> *</span></label>
                                <Field name="freePresent" id="freePresent" type="text" className="form-control" placeholder="Something about this room"/>
                                <ErrorMessage name="freePresent" component="div" className="form-err-msg"/>
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
}