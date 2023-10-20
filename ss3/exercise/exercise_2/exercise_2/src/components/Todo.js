'use strict';
import React, {Component} from "react";

class Todo extends Component{
    constructor() {
        super();
        this.state = {
            list: [],
            item: "",
        };
    };

    handleChange = even => {
        this.setState({item: even.target.value});
    }

    handleAddItem = () => {
        if (this.state.item) {
            //line này sẽ setState -> set 1 đối tượng, chú ý cú pháp set đối tượng
            this.setState({
                ...this.state,
                list: [...this.state.list, this.state.item]
            });
        }
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h2>Todo list</h2>
                    </div>
                    <div>
                        <input onChange={(e) => this.handleChange(e)} type="text" style={{width: 200}}/>
                        <button onClick={this.handleAddItem}>Add</button>
                    </div>
                    <div>
                        <h3>Added items</h3>
                        <ul>
                            {
                                this.state.list.map((item) => <li>{item}</li>)
                            }
                        </ul>
                    </div>
                </center>
            </div>
        )
    }
}

export default Todo;