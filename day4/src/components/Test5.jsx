import React, { Component } from "react";

class Test5 extends Component {
    textInput = React.createRef();
    state = { done: false };

    onToggle = () => {
        const value = this.textInput.current.value;
        this.textInput.current.value = this.state.done ? value.toLowerCase() : value.toUpperCase();
        this.setState((state) => ({ done: !state.done }));
    };

    render() {
        return (
            <div>
                <h4>ref</h4>
                <input type="text" ref={this.textInput} />
                <button onClick={this.onToggle}>변환</button>
            </div>
        );
    }
}

export default Test5;
