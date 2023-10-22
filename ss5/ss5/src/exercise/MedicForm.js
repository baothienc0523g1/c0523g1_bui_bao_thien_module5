import {useState} from "react";
import {Formik} from "formik";

export default function MedicForm() {
    const [myForm, setMyForm] = useState({});

    const EMAIL_REGEX = {
        email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
    };

    function handleChange(item) {
        setMyForm({
            ...myForm,
            [item.target.name]: item.target.value
        })
    }

    function handleValidate() {
        const errors = {};
        const required = "Vui lòng điền trường này";
        let birthDay = new Date(myForm.birth);
        let dayConstrain = '1900-01-01';

        if (!myForm.name || !myForm.email || !myForm.nation
            || !myForm.workCo || !myForm.bhyt || !myForm.city
            || !myForm.city || !myForm.district || !myForm.address
            || !myForm.str || !myForm.phone || !myForm.email || !myForm.birth) {

        }
        if (!EMAIL_REGEX.email.test(myForm.email)) {
            errors.email = "Email sai cú pháp";
        }
        if (isNaN(myForm.phone)) {
            errors.phone = "Trường này phải là số";
        }
        if (birthDay < dayConstrain) {
            errors.birth = "Số tuổi hơi điêu";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Thông tin đã được ghi nhận!");
    }

    return (
        <>
            <div id="my-form" style={{margin: "35px"}}>
                <Formik
                    initialValues={myForm}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                    {({errors, handleSubmit}) =>
                        <form onSubmit={handleSubmit}>
                            <h2>Tờ khai y tế</h2>
                            <label htmlFor="name">Họ tên </label><br/>
                            <input type="text" name="name" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="identity">Số hộ chiếu/CMND </label><br/>
                            <input type="text" name="identity" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="birth">Năm seen </label><br/>
                            <input type="date" name="birth" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>
                            {/*<small className="error">{errors.birth}</small><br/>*/}

                            <label htmlFor="nation">Quốc tịch</label><br/>
                            <input type="text" name="nation" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="male">Nam</label>
                            <input className="radio-check" type="radio" name="gender" value="nam"
                                   onChange={handleChange}/>
                            <label htmlFor="female">Nữ</label>
                            <input className="radio-check" type="radio" name="gender" value="nu"
                                   onChange={handleChange}/>
                            <label htmlFor="3d">3D</label>
                            <input className="radio-check" type="radio" name="gender" value="3d"
                                   onChange={handleChange}/>
                            <br/>

                            <label htmlFor="workCo">Bộ phận làm việc</label><br/>
                            <input type="text" id="workCo" name="workCo" onChange={handleChange}/><br/>

                            <label htmlFor="bhyt">Có thẻ BHTY</label>
                            <input type="checkbox" id="bhyt" name="bhyt" className="bhyt" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            {/**/}
                            <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                            <label htmlFor="city">Tỉnh thành </label><br/>
                            <input type="text" id="city" name="city" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="district">Quận/huyện </label><br/>
                            <input type="text" id="district" name="district" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="address">Phường/xã </label><br/>
                            <input type="text" id="address" name="address" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="str">Số nhà, phố, tổ dân phố/thôn/đội </label><br/>
                            <input type="text" id="str" name="str" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor=" phone">Điện thoại </label><br/>
                            <input type="text" id="phone" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <label htmlFor="email">Email</label><br/>
                            <input type="text" id="email" name="email" onChange={handleChange}/><br/>
                            <small className="error">{errors.fill}</small><br/>

                            <button type="submit">Xác nhận</button>
                        </form>}
                </Formik>
            </div>
        </>
    );
}
