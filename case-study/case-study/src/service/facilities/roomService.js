import axios from "axios";

const GET_FACILITY_URL = "http://localhost:8080/";
const getRoomList = async () => {
    try {
        let response = await axios.get(GET_FACILITY_URL + `rooms`)
        return response.data;
    } catch (err) {
        console.log("Error while get facilities list: " + err);
        throw err;
    }
}

export {getRoomList}