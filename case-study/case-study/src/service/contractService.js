import axios from "axios";

const GET_URL = "http://localhost:8080/contracts/";
const GET_BY_ID_URL = "http://localhost:8080/contracts/";
const POST_URL = "http://localhost:8080/contracts/";
const PATCH_URL = "http://localhost:8080/contracts/";
const DELETE_URL = "http://localhost:8080/contracts/";

const findAll = async () => {
    try {
        const res = await axios.get(GET_URL)
        return res.data;
    } catch (err) {
        console.log("error while getting contract list: " + err);
        throw err;
    }
}

const add = async (value) => {
    try {
        const res = await axios.post(POST_URL, value)
        return res.status;
    } catch (err) {
        console.log("error while adding contract to list: " + err);
        throw err;
    }
}

const remove = async (id) => {
    try {
        const res = await axios.delete(DELETE_URL + id)
        return res.status;
    } catch (err) {
        console.log("error while removing contract: " + err);
        throw err;
    }
}

const findObjById = async (id) => {
    try {
        const res = await axios.get(GET_BY_ID_URL + id)
        return res.data;
    } catch (err) {
        console.log("error while finding contract with id: " + err);
        throw err;
    }
}

const edit = async (value) => {
    try {
        const res = await axios.patch(PATCH_URL + value.id, value);
        return res.status;
    } catch (err) {
        console.log("error while edit contract: " + err);
        throw err;
    }
}


export {findAll, add, remove, findObjById, edit}