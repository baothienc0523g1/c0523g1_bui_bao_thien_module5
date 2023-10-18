import logo from './logo.svg';
import './App.css';
import Hello from "./components/ss3/practice/practice_6";
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    };

    delete = () => {
        this.setState({display: false});
    };

    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello/>
        }
        return (
            <div style={{textAlign: 'center'}}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    };
}
export default App;