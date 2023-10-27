import axios from "axios";

const GET_FACILITY_URL = "http://localhost:8080/";
const POST_URL = "http://localhost:8080/";
const getVillaList = async () => {
    try {
        let response = await axios.get(GET_FACILITY_URL + `villas`)
        return await response.data;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}

const add = async (value) => {
    try {
        let response = await axios.post(POST_URL + `villas`,value)
        return response.status;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}

export {getVillaList, add}