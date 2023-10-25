import axios from "axios";


const GET_URL = "https://jsonplaceholder.typicode.com/users";
const DELETE_URL = "https://jsonplaceholder.typicode.com/users/";

const getList = async () => {
    try {
        const data = await axios.get(GET_URL);
        console.log("----------------------------")
        console.log(data.status)
        return data.data;
    } catch (err) {
        console.log("Error while get list: " + err.message);
    }
}

const removeUser = async (id) => {
    try {
        const data = await axios.delete(DELETE_URL + id);
        return data.status;
    } catch (err) {
        console.log("Error while get list: " + err.message);
    }
}

export {getList, removeUser}