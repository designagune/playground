import React, { Component } from "react";
import "./style/Test6.css";

class Test6 extends Component {
    state = {
        done: false,
    };

    onAddClass = () => {
        this.setState({ done: true });
    };

    onRemoveClass = () => {
        this.setState({ done: false });
    };

    onToggleClass = () => {
        this.setState({ done: !this.state.done });
    };

    render() {
        const {
            state: { done },
        } = this;
        return (
            <div className="Test6">
                <p>지금은 연습중이랍니다?</p>
                <p className="test">지금은 연습중이랍니다?</p>
                <p className={`test ${done ? "on" : ""}`}>지금은 연습중이랍니다?</p>
                <p className={`test ${done && "on"}`}>지금은 연습중이랍니다?</p>
                <p className={`${done && "on"}`}>지금은 연습중이랍니다?</p>

                <button onClick={() => this.onAddClass()}>class add</button>
                <button onClick={() => this.onRemoveClass()}>class delete</button>
                <button onClick={() => this.onToggleClass()}>class toggle</button>
            </div>
        );
    }
}

export default Test6;
