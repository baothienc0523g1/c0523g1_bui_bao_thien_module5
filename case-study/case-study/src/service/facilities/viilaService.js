import axios from "axios";

const GET_FACILITY_URL = "http://localhost:8080/";
const POST_URL = "http://localhost:8080/";
const getVillaList = async (keyword) => {
    try {
        let response = await axios.get(GET_FACILITY_URL + `villas?name_like=${keyword}`)
        return await response.data;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}

const add = async (value) => {
    try {
        let response = await axios.post(POST_URL + `villas`, value)
        return response.status;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}

const findById = async (id) => {
    try {
        return (await axios.get(GET_FACILITY_URL + "villas/" + id)).data;
    } catch (err) {
        console.log("Error while get facility: " + err);
        throw err;
    }
}

const edit = async (value) => {
    try {
        let response = await axios.put(GET_FACILITY_URL + "villas/" + value.id, value)
        return response.status;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}

const remove = async (value) => {
    try {
        let response = await axios.delete(GET_FACILITY_URL + "villas/" + value.id);
        return response.status;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}


export {getVillaList, add, findById, edit, remove}