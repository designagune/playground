import React, { Component } from "react";

class Test4 extends Component {
    handleClick1 = () => {
        alert("test1");
    };

    handleClick2 = () => {
        alert("test2");
    };

    handleClick3 = () => {
        alert("test3");
    };

    handleClick4 = (num) => num && alert(num);
    handleClick5 = (num1, num2) => num1 && num2 && alert(num1 + num2);

    render() {
        return (
            <div>
                <h2>event and function</h2>
                <p>
                    <button onClick={this.handleClick1}>Event1</button>
                    <button onClick={this.handleClick2}>Event2</button>
                    <button onClick={this.handleClick3}>Event3</button>
                </p>
                <p>
                    <button onClick={() => alert("test")}>이벤또</button>
                    <button onClick={() => alert("test")}>이벤또</button>
                    <button onClick={() => alert("test")}>이벤또</button>
                </p>
                <p>
                    <button onClick={() => this.handleClick4(10)}>값 전달해줄꺼다</button>
                    <button onClick={() => this.handleClick5(10, 20)}>값 전달해줄꺼다</button>
                </p>
            </div>
        );
    }
}

export default Test4;
