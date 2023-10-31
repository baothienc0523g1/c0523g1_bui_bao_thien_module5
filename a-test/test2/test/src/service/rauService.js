import axios from "axios";

const URL = " http://localhost:8081/hangHoa";
const URL_TYPE = " http://localhost:8081/loaiHangHoa";
const getAll = async () => {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (err) {
        console.log("error while loading list: " + err);
        throw err;
    }
}

const remove = async (event) => {
    try {
        const res = await axios.delete(URL + "/" + event.id)
        return res.status
    } catch (err) {
        console.log("error while remove: " + err);
        throw err;
    }
}


const add = async (event) => {
    try {
        const res = await axios.post(URL, event)
        return res.status
    } catch (err) {
        console.log("error while add: " + err);
        throw err;
    }
}

const getTypeList = async (event) => {
    try {
        const res = await axios.get(URL_TYPE)
        return res.data
    } catch (err) {
        console.log("error while get data: " + err);
        throw err;
    }
}



export {getAll, remove, add, getTypeList}