import {useEffect, useState} from "react";
import axios from 'axios';

export function Exercise() {
    const [todoList, setTodoList] = useState([]);
    const [todoItem, setTodoItem] = useState({});

    useEffect(() => {
        try {
            axios
                .get("https://jsonplaceholder.typicode.com/todos/")
                .then(response => {
                    console.log(response.data)
                    setTodoList(response.data)
                });
        } catch (err) {
            console.log("error while adding data: " + err.message());
            throw err;
        }

    }, []);


    const handleSubmit = () => {
        console.log(todoItem);
        if (todoItem.id != null) {
            try {
                axios
                    .post('https://jsonplaceholder.typicode.com/todos', {todoItem})
                    .then(res => {
                        console.log(res.status)
                    });
            } catch (err) {
                console.log(err);
                throw err;
            }
        } else {
            alert("please put something todo before submit!");
        }
    }

    const handleChange = (event) => {
        let newId = todoList[todoList.length - 1].id + 1;
        const blankStr = " ";

        if (typeof event !== blankStr || event.length !== 0) {
            setTodoItem(
                {
                    userId: 1,
                    id: newId,
                    title: event.target.value,
                    completed: false
                }
            );
        }
    }

    if (todoList.length > 0) {
        return (
            <>
                <div id="main">
                    <h1>Todo list</h1>
                    <div>
                        <input type="text" name="todoItem"
                               placeholder="Nothing todo today, go sleep"
                               onChange={(todoItem) => handleChange(todoItem)}
                               style={{width: "350px"}}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    <hr/>
                    <h3>List</h3>
                    <ol>
                        {
                            todoList.map((item) => (
                                <li key={item.id}>{item.title}</li>))
                        }
                    </ol>
                </div>
            </>
        );
    }

}