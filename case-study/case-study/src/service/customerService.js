import axios from "axios";

const GET_URL = "http://localhost:8080/customers/";
const POST_URL = 'http://localhost:8080/customers/';
const PUT_URL = "http://localhost:8080/customers/";
const GET_BY_ID = "http://localhost:8080/customers/";

const findAll = async () => {
    try {
        const res = await axios.get(GET_URL);
        return res.data;
    } catch (err) {
        console.log("error while getting customer list: " + err);
        throw err;
    }
}

const add = async (value) => {
    try {
        const res = await axios.post(POST_URL, value);
        console.log(res.status)
        return res.status;
    } catch (err) {
        console.log("error while adding customer: " + err);
        throw err;
    }
}

const edit = async (value) => {
    try {
        const res = await axios.put(PUT_URL + value.id, value);
        return res.status;
    } catch (err) {
        console.log("error while edit customer: " + err);
        throw err;
    }
}

const findById = async (customerId) => {
    try {
        const res = await axios.get(GET_BY_ID + customerId);
        return res.data
    } catch (err) {
        console.log("error while get customer with ID: " + err);
        throw err;
    }
}

const removeCustomer = async (customerId) => {
    const DELETE_URL = "http://localhost:8080/customers/";
    try {
        const res = await axios.delete(DELETE_URL + customerId);
        return res.status
    } catch (err) {
        console.log("error while delete customer: " + err);
        throw err;
    }
}

export {findAll, add, edit, findById, removeCustomer};