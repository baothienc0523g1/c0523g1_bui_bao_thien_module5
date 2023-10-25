import {GET_LIST} from "../ActionTypes";

const userReducer = (users = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_LIST:
            return payload;
        default:
            return users;
    }
}

export default userReducer;