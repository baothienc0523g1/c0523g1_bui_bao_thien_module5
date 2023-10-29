import axios from "axios";

const URL = "http://localhost:8080/sanPham";
const getAll = async (keyword) => {
    try {
        const res = await axios.get(URL + `?ten_like=${keyword}`);
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const add = async (value) => {
    try {
        const res = await axios.post(URL, value);
        return res.status;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


export {getAll, add};