import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

export function UserDetail() {
    const {userId} = useParams();
    const isCreate = !userId;
    const [user, setUser] = useState({});

    useEffect(() => {
        if (userId) {
            axios
                .get(`http://localhost:3001/api/users/${userId}`)
                .then(response => {
                    setUser(response.data)
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [userId]);

    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        axios
            .post("http://localhost:3001/api/users", user)
            .then(response => {
                alert(
                    `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
                        response.data
                    )} successfully!`
                );
            })
            .catch(err => {
                throw err;
            })
    }

    return (
        <>
            <div>
                <h1>User detail</h1>
                <form>
                    <div><label>ID</label></div>
                    <div><input name={"id"} value={user.id || ""} onChange={handleChange}/></div>

                    <div><label>Name</label></div>
                    <div><input name={"name"} value={user.name || ""} onChange={handleChange}/></div>

                    <div><label>Birthday</label></div>
                    <div><input type={"date"} name={"birthday"} value={user.birthday || ""} onChange={handleChange}/>
                    </div>


                    <div>
                        <button type={"button"} onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}