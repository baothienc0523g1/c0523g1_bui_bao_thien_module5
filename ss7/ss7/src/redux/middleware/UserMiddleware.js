import * as service from "../../service/service";
import {GET_LIST} from "../ActionTypes";

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
export {getAll}