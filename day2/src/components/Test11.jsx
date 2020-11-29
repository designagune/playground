import React, { Component } from "react";
import Test11Sub from "./Test11Sub";

class Test11 extends Component {
    state = {
        com: "Test11",
        message: "메세지라는디유",
    };

    onClick1 = () => {
        this.setState({
            com: "Test11Sub",
            message: "superParentComponent",
        });
    };
    onClick2 = () => {
        this.setState({
            com: "Test11SubSub",
            message: "subChildComponent",
        });
    };
    onClick3 = (num) => alert(num);
    onClick4 = (num1, num2) => alert(num1 + num2);

    render() {
        const {
            state: { com, message },
        } = this;
        return (
            <div>
                <Test11Sub
                    com={com}
                    message={message}
                    click1={this.onClick1}
                    click2={this.onClick2}
                    click3={this.onClick3}
                    click4={this.onClick4}
                />
            </div>
        );
    }
}

export default Test11;
