function SingUpForm() {
    return (
        <div className="container" style={{height: "650px"}}>
            <h3 className="management-title mt-3">Sign up</h3>
            <hr/>
            <form id="index-add-form" action="#">
                <table id="add-form-table" style={{width: "50%", color: "black", fontWeight: "bold"}} align={"center"}>
                    <tbody>
                    <tr>
                        <td style={{textAlign: "center"}} colSpan="2">
                            <div className="mb-2">
                                <label htmlFor="customerName" className="form-label">Your name</label>
                                <input type="text" className="form-control" id="customerName"
                                       placeholder="Your name"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center", width: "45%"}}>
                            <div className=" mb-2">
                                <label htmlFor=" customerBirthday" className=" form-label">Birthday</label>
                                <input type=" date" className=" form-control" id=" customerBirthday"
                                       placeholder=" Your birthday"/>
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
                                <label htmlFor="customerEmail" className="form-label"> Your email
                                </label>
                                <input type="email" className="form-control" id="customerEmail"
                                       placeholder="ex. abc@gmail.com"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center", width: "45%"}}>
                            <div className="mb-2">
                                <label htmlFor="customerPhone" className="form-label">Phone number</label>
                                <input type="tel" className="form-control" id="customerPhone"
                                       placeholder="Your phone number"/>
                            </div>
                        </td>
                        <td style={{textAlign: "center", width: "45%"}}>
                            <div className="mb-2">
                                <label htmlFor="customerIdentity" className="form-label">Personal ID number</label>
                                <input type="number" className="form-control" id="customerIdentity"
                                       placeholder="Your identity"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button type="reset" style={{width: "49.6%"}}
                                    className="btn btn-outline-info mb-1">Cancel
                            </button>
                            <button type="submit" style={{width: "49.5%"}}
                                    className="btn btn-outline-primary mb-1">Confirm
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default SingUpForm;