import axios from "axios";


const API_URL = "http://localhost:8080/api/customers";
const API_GET_SIDE = "http://localhost:8080/api/side";
const findAllAPI = async (searchName, searchAddress) => {
    try {
        return await axios.get(API_URL
            + `?name_like=${searchName}&customerType.typeName_like=${searchAddress}`
        );
    } catch (err) {
        console.log("error while getting customer list: " + err);
        throw err;
    }
}
const findById = async (id) => {
    try {
        return (await axios.get(API_URL + `/${id}`)).data;
    } catch (err) {
        console.log("error while getting customer list: " + err);
        throw err;
    }
}

const getCustomerType = async () => {
    try {
        const res = await axios.get(API_GET_SIDE + "/types");
        return res.data
    } catch (err) {
        console.log("error while get type customer: " + err);
        throw err;
    }
}

const getGender = async () => {
    try {
        const res = await axios.get(API_GET_SIDE + "/genders");
        return res.data
    } catch (err) {
        console.log("error while get gender: " + err);
        throw err;
    }
}

const add = async (event) => {
    try {
        const res = await axios.post(API_URL, event)
        return res.status;
    } catch (err) {
        console.log("error while add customer: " + err);
        throw err;
    }
}


const edit = async (event) => {
    try {
        const res = await axios.put(API_URL, event)
        return res.status;
    } catch (err) {
        console.log("error while edit customer: " + err);
        throw err;
    }
}



const remove = async (id) => {
    try {
        const res = await axios.delete(API_URL + `/${id}`)
        return res.status;
    } catch (err) {
        console.log("error while edit customer: " + err);
        throw err;
    }
}


export {findAllAPI, getCustomerType, getGender, add, edit, findById, remove};