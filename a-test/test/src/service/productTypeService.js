import axios from "axios";

const URL = "http://localhost:8080/loaiHang";

const getAll = async () => {
    try {
        const res = await axios.get(URL);
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export {getAll};
