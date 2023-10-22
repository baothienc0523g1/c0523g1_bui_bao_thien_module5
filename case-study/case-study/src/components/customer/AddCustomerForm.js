import {useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";

export function AddCustomerForm() {
    const [form, setForm] = useState({});

    const customer = yup.object.shape({

    })

    const handleSubmit = () => {

    }
    return (
        <div className="container" style={{height: "650px"}}>
            <h3 className="management-title mt-3">Add new customer</h3>
            <hr/>
            <Formik>
                <form>
                    <table id="add-form-table" style={{width: "50%", color: "black", fontWeight: "bold"}}
                           align={"center"}>
                        <tr>
                            <td style={{textAlign: "center"}} colSpan="2">
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label">Customer's name</label>
                                    <input type="text" className="form-control" id="name"
                                           placeholder="Customer's name"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center"}} colSpan="2">
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label">Customer's address</label>
                                    <input type="text" className="form-control" id="address"
                                           placeholder="Customer's address"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center", width: "45%"}}>
                                <div className=" mb-2">
                                    <label htmlFor="birthday" className=" form-label">Birthday</label>
                                    <input type=" date" className=" form-control" id="birthday"
                                           placeholder=" Customer's birthday"/>
                                </div>
                            </td>
                            <td style={{textAlign: "center", width: "45%"}}>
                                <div className="mb-2">
                                    <label htmlFor="customerGender" className="form-label">Gender</label>
                                    <select className="form-select" aria-label="Default select example"
                                            id="customerGender">
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">3D</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center"}} colSpan="2">
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label"> Customer' s email
                                    </label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="ex. abc@gmail.com"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center", width: "45%"}}>
                                <div className="mb-2">
                                    <label htmlFor="phone" className="form-label">Phone number</label>
                                    <input type="tel" className="form-control" id="phone"
                                           placeholder="NNNN NNN NNN"/>
                                </div>
                            </td>
                            <td style={{textAlign: "center", width: "45%"}}>
                                <div className="mb-2">
                                    <label htmlFor="identiy" className="form-label">Personal ID number</label>
                                    <input type="number" className="form-control" id="identiy"
                                           placeholder="NNN NNN NNN NNN"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button" style={{width: "49.6%"}}
                                        className="btn btn-outline-info mb-1">Cancel
                                </button>
                                <button type="submit" style={{width: "49.5%"}}
                                        className="btn btn-outline-primary mb-1">Confirm
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </Formik>
        </div>
    )
}
