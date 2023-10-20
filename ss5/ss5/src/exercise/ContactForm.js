import React, {useState} from "react";
import {Formik} from "formik";

function ContactForm() {
    const [form, setForm] = useState({});

    const EMAIL_REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    function handleChange(item) {
        setForm({
            ...form,
            [item.target.name]: item.target.value
            //line 14 sẽ thêm một field mới trong obj form, với key - tên form
            // value - giá trị nhập vào
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Email required!"
            // nếu email rỗng -> thêm trường email cho obj với value required
            // logic tương tự cho các field ở dưới
        } else if (!EMAIL_REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.name) {
            errors.name = "Please leave your name here";
        }

        if (isNaN(form.phone)) {
            errors.phone = "This field must be number";
        } else if (!form.phone) {
            errors.phone = "Please fill this field"
        }

        if (!form.message) {
            errors.message = "Please, leave a message here then we can help you!"
        }
        //
        return errors;
    }

    function handleSubmit() {
        alert("Thanks for your feedback, we'll ignore it. Hihi");
    }

    return (
        <div style={{marginLeft: "50px"}}>
            <h1>Contact form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td><label htmlFor="name">Name</label></td>
                                <td><input id="name" name="name" type="text" onChange={handleChange}/></td>
                                <small style={{color: "red"}}>{errors.name}</small>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email</label></td>
                                <td><input id="email" name="email" type="email" onChange={handleChange}/></td>
                                <small style={{color: "red"}}>{errors.email}</small>
                            </tr>
                            <tr>
                                <td><label htmlFor="phone">Phone</label></td>
                                <td><input id="phone" name="phone" type="text" onChange={handleChange}/></td>
                                <small style={{color: "red"}}>{errors.phone}</small>
                            </tr>
                            <tr>
                                <td><label htmlFor="message">Message</label></td>
                                <td><textarea id="message" name="message" onChange={handleChange}/></td>
                                <small style={{color: "red"}}>{errors.message}</small>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button style={{width: "50%", marginLeft: "25%"}} type="submit">
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;