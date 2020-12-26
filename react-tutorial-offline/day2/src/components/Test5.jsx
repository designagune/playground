import React, { Component } from "react";

class Test5 extends Component {
    state = {
        name: "고길동",
        age: 20,
        addr: "광주",
        done: true,
    };

    handleClick1 = () => {
        this.setState({
            name: "상큼이",
            age: 21,
            addr: "부산",
            done: false,
        });
    };
    handleClick2 = () => {
        this.setState({
            name: "천옥",
            age: 29,
            addr: "제주",
            done: true,
        });
    };
    handleClick3 = () => {
        this.setState({
            name: "만옥",
            age: 33,
            addr: "청담",
            done: true,
        });
    };

    handleReset = () => {
        this.setState({
            name: "",
            age: 0,
            addr: "",
            done: false,
        });
    };

    render() {
        const {
            state: { name, age, addr, done },
        } = this;
        return (
            <div>
                <h2>state, destructuring</h2>
                <p>name : {name}</p>
                <p>age : {age}</p>
                <p>addr : {addr}</p>
                <p>result : {done ? "confirm" : "concel"}</p>
                <p>
                    <button onClick={this.handleClick1}>change</button>
                    <button onClick={this.handleClick2}>change</button>
                    <button onClick={this.handleClick3}>change</button>
                </p>
                <p>
                    <button
                        onClick={() =>
                            this.setState({
                                name: "은비",
                                age: 22,
                                addr: "신림",
                                done: false,
                            })
                        }
                    >
                        값 바꾸기
                    </button>
                    <button onClick={this.handleReset}>초기화</button>
                </p>
            </div>
        );
    }
}

export default Test5;
