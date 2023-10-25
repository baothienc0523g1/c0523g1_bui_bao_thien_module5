import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

export default function MedicForm() {
    const requiredString = "Vui lòng điền trường này";
    const invalidString = "Dữ liệu nhập vào không hợp lệ";

    const init = {
        name: "",
        identity: "",
        birth: "",
        nation: "",
        workCo: "",
        city: "",
        district: "",
        address: "",
        str: "",
        phone: "",
        email: ""
    }

    const MyMedicForm = yup.object().shape({
        name: yup.string().required(requiredString),
        identity: yup.string()
            .matches(/^[0-9]{12}$/, invalidString)
            .required(requiredString),
        birth: yup.string()
            .matches(/^[1][9][\d]{2}\-[\d]{2}\-[\d]{2}$|^[2][0][0,1][\d]{1}\-[\d]{2}\-[\d]{2}$/, "Độ tuổi hơi sai")
            .required(requiredString), //chua validate 1900
        nation: yup.string().required(requiredString),
        city: yup.string().required(requiredString),
        district: yup.string().required(requiredString),
        address: yup.string().required(requiredString),
        phone: yup.string()
            .matches(/^[0-9]{10,12}$/, invalidString)
            .required(requiredString),
        email: yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, invalidString)
            .required(requiredString)
    });

    const handleSubmit = () => {
        alert("Khai báo thành công");
    }

    return (
        <>
            <div id="my-form" style={{margin: "35px"}}>
                <Formik
                    initialValues={init}
                    validationSchema={MyMedicForm}
                    onSubmit={handleSubmit}>
                    <Form>
                        <h2>Tờ khai y tế</h2>
                        <label htmlFor="name">Họ tên </label><br/>
                        <Field type="text" name="name" id={"name"}/><br/>
                        <ErrorMessage name="name" component="div"/>

                        <label htmlFor="identity">Số hộ chiếu/CMND </label><br/>
                        <Field type="text" name="identity" id={"identity"}/><br/>
                        <ErrorMessage name="identity" component="div"/>

                        <label htmlFor="birth">Năm sinh </label><br/>
                        <Field type="date" name="birth" id={"birth"}/><br/>
                        <ErrorMessage name="birth" component="div"/>

                        <label htmlFor="nation">Quốc tịch</label><br/>
                        <Field type="text" name="nation" id={"nation"}/><br/>
                        <ErrorMessage name="nation" component="div"/>

                        <label htmlFor="male">Nam</label>
                        <input className="radio-check" type="radio" name="gender" value="nam"/>
                        <label htmlFor="female">Nữ</label>
                        <input className="radio-check" type="radio" name="gender" value="nu"/>
                        <label htmlFor="3d">3D</label>
                        <input className="radio-check" type="radio" name="gender" value="3d"/>
                        <br/>

                        <label htmlFor="workCo">Bộ phận làm việc</label><br/>
                        <Field type="text" id={"workCo"} name="workCo"/><br/>

                        <label htmlFor="bhyt">Có thẻ BHTY</label>
                        <Field type="checkBox" id={"bhyt"} name="bhyt" className="bhyt"/><br/>

                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <label htmlFor="city">Tỉnh thành </label><br/>
                        <Field type="text" id={"city"} name="city"/><br/>
                        <ErrorMessage name="city" component="div"/>

                        <label htmlFor="district">Quận/huyện </label><br/>
                        <Field type="text" id={"district"} name="district"/><br/>
                        <ErrorMessage name="name" component="div"/>

                        <label htmlFor="address">Phường/xã </label><br/>
                        <Field type="text" id={"address"} name="address"/><br/>
                        <ErrorMessage name="address" component="div"/>

                        <label htmlFor="str">Số nhà, phố, tổ dân phố/thôn/đội </label><br/>
                        <Field type="text" id={"str"} name="str"/><br/>
                        <ErrorMessage name="str" component="div"/>

                        <label htmlFor="phone">Điện thoại </label><br/>
                        <Field type="text" name={"phone"} id="phone"/><br/>
                        <ErrorMessage name="phone" component="div"/>

                        <label htmlFor="email">Email</label><br/>
                        <Field type="text" id={"email"} name="email"/><br/>
                        <ErrorMessage name="email" component="div"/>

                        <h3>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng
                            lãnh thổ nào
                            (Có thể đi qua nhiều quốc gia)</h3>
                        <textarea cols="30" rows="3"/>

                        <h3>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu
                            hiệu nào sau đây
                            không?</h3>
                        <Field type="checkBox" className="bhyt"/>Sốt<br/>
                        <Field type="checkBox" className="bhyt"/>Ho<br/>
                        <Field type="checkBox" className="bhyt"/>Khó thở<br/>
                        <Field type="checkBox" className="bhyt"/>Viêm phổi<br/>
                        <Field type="checkBox" className="bhyt"/>Đau họng<br/>
                        <Field type="checkBox" className="bhyt"/>Mệt mõi<br/>

                        <h3>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h3>
                        <Field type="checkBox" className="bhyt"/>Người bệnh hoặc
                        nghi ngờ mắc
                        COVID-19<br/>
                        <Field type="checkBox" className="bhyt"/>Người từ nước có
                        COVID-19<br/>
                        <Field type="checkBox" className="bhyt"/>Người từ nước có
                        biểu hiện: Sốt,
                        ho, khó thở, viêm
                        phổi<br/>

                        <button type={"submit"}>Xác nhận</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
