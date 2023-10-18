import {Component} from "react";

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    };

    increase = () => {
        this.setState({number: this.state.number + 1});
    };
    decrease = () => {
        this.setState({number: this.state.number - 1});
    };

    render() {
        return (
            <div>
                <button onClick={this.decrease}>Decrease</button>
                <span>{this.state.number}</span>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}
export default MyApp;