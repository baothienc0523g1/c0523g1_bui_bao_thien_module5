import * as service from "../../service/service";
import {DELETE, GET_LIST} from "../ActionTypes";

const getAll = () => async (dispatch) => {
    try {
        const data = await service.getList();
        dispatch({
            type: GET_LIST,
            payload: data
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const removeUser = (id) => async (dispatch) => {
    try {
        const status = await service.removeUser(id);
        dispatch({
            type: DELETE,
            payload: "Http status: " + status
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}
export {getAll, removeUser}