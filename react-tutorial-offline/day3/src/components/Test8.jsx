import React, { Component } from "react";

class Test8 extends Component {
    state = {
        age: "",
        name: "",
    };

    onChange = event => {
        const {
            target: { value, name },
        } = event;

        this.setState({ ...this.state, [name]: value });
    };
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} name="age" />
                <input type="text" onChange={this.onChange} name="name" />
            </div>
        );
    }
}

export default Test8;
