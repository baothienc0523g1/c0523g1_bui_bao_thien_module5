import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        }
    )

    const userLogined = useSelector(state => state.userLogined);
    const setValueForUser = (key, value) => {
        const newValue = {...user, [key]: value};
        setUser(newValue);
    };

    const login = () => {
        dispatch({type: "LOGIN", payload: user});
    };

    useEffect(() => {
        if (userLogined.username) {
            navigate("/user");
        }
    }, [userLogined, navigate]);

    return (
        <>
            <form>
                <label>User name</label>
                <input
                    id="username"
                    onChange={e => setValueForUser("username", e.target.value)}
                    type="text"
                />
                <label>Password</label>
                <input
                    id="password"
                    onChange={e => setValueForUser("password", e.target.value)}
                    type="password"
                />
                <button
                    type="button"
                    onClick={() => {
                        login();
                    }}
                >
                    Login
                </button>
            </form>
        </>
    );
}