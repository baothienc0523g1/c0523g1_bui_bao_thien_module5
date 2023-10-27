import axios from "axios";

const GET_URL = "http://localhost:8080/customers";
const POST_URL = 'http://localhost:8080/customers/';
const PUT_URL = "http://localhost:8080/customers/";
const DELETE_URL = "http://localhost:8080/customers/";
const GET_BY_ID = "http://localhost:8080/customers/";
const LOCAL_HOST = "http://localhost:8080/";


const findAll = async (searchName, searchAddress) => {
    try {
        const res = await axios.get(GET_URL
        + `?name_like=${searchName}&customerType.typeName_like=${searchAddress}`
        + `&_sort=id&_order=desc`
        );
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
    try {
        const res = await axios.delete(DELETE_URL + customerId);
        return res.status
    } catch (err) {
        console.log("error while delete customer: " + err);
        throw err;
    }
}

const getCustomerType = async () => {
    try {
        const res = await axios.get(LOCAL_HOST + "customer_types");
        return res.data
    } catch (err) {
        console.log("error while delete customer: " + err);
        throw err;
    }
}

const getGender = async () => {
    try {
        const res = await axios.get(LOCAL_HOST + "genders");
        return res.data
    } catch (err) {
        console.log("error while delete customer: " + err);
        throw err;
    }
}
export {findAll, add, edit, findById, removeCustomer, getCustomerType, getGender};