import React, { Component } from "react";
import "./Test1.css";
class Test1 extends Component {
    state = {
        done: false,
    };

    onToggle = () => {
        const { done } = this.state;
        this.setState({ done: !done });
    };

    render() {
        const { done } = this.state;
        return (
            <div>
                <p className={`${done && "on"}`} onClick={this.onToggle}>
                    테스트래요
                </p>
            </div>
        );
    }
}

export default Test1;
