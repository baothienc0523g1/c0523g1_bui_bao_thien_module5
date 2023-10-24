import axios from "axios";


async function getAll() {
    const GET_URL = "http://localhost:8080/books";
    try {
        const res = await axios.get(GET_URL)
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function add(value) {
    const POST_URL = "http://localhost:8080/books";
    try {
        const response = await axios.post(POST_URL, value)
        return response.status;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function remove(id) {
    const DELETE_URL = "http://localhost:8080/books/";
    if (await findById(id) === 200) {
        try {
            const response = await axios.delete(DELETE_URL + id);
            return response.status;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function edit(id, obj) {
    const PUT_URL = "http://localhost:8080/books/";
    if (await findById(id) === 200) {
        try {
            const response = await axios.put(PUT_URL + id, obj);
            return response.status;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function findById(id) {
    const GET_BY_ID_URL = "http://localhost:8080/books/";
    try {
        const response = await axios.get(GET_BY_ID_URL + id)
        return response.status;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function findBookObjById(id) {
    const GET_BY_ID_URL = "http://localhost:8080/books/";
    try {
        const response = await axios.get(GET_BY_ID_URL + id)
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export {getAll, add, remove, findById, findBookObjById, edit};