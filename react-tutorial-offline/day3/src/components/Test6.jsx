import React, { Component } from "react";

class Test6 extends Component {
    state = { text: "" };

    onChange = event => {
        const {
            target: { value },
        } = event;

        this.setState({ text: value });
        console.log(this.state.text);
    };
    render() {
        const {
            state: { text },
        } = this;

        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <h3>text: {text}</h3>
            </div>
        );
    }
}

export default Test6;
