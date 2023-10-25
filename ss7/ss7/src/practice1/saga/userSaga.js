import axios, {put} from "axios";
import {FETCH_USER, FETCH_USER_SUCCESS, LOGIN, LOGIN_SUCCESS} from "../redux/action";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function* getUser() {
    try {
        const res = yield axios.get(BASE_URL);
        yield put({type: FETCH_USER_SUCCESS, payload: res.data});
    } catch (err) {
        console.log(err);
    }
}

function*  authSagaFn(action) {
    const user = action.payload;
    if (user.username === "admin" && user.password === "admin") {
        yield put({type: LOGIN_SUCCESS, payload: user});
        yield put({type: FETCH_USER, payload: {}});
    }
}

function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFn);
    yield takeLatest(FETCH_USER, getUser());
}

export default class rootSaga {
}