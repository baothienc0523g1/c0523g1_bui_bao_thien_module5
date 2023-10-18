'use strict'
import {Component} from "react";

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'purple'})
        }, 2000);
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.color,
                paddingTop: 50,
                width: 400,
                height: 80,
                margin: 'auto'
            }}>
            </div>
        )
    }
}
export default MyApp;