import {FETCH_USER_SUCCESS, LOGIN_SUCCESS} from "./action";

const initState = {
    users: [],
    userLogined: {}
};

//tao reducer
export const rootReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {...state, userLogined: payload};
        case FETCH_USER_SUCCESS:
            return {...state, users: payload};
        default:
            return state;
    }
}
