import React, { Component } from "react";
import Test1Sub from "./Test1Sub";

class Test1 extends Component {
    state = {
        data: [
            { no: 1, name: "길동이", age: 19, done: true },
            { no: 2, name: "김갑수", age: 28, done: false },
            { no: 3, name: "우지윤", age: 22, done: true },
            { no: 4, name: "이길성", age: 26, done: false },
            { no: 5, name: "한주빈", age: 24, done: false },
            { no: 6, name: "고길동", age: 21, done: true },
        ],
    };

    onClick1 = () => {
        this.setState({
            data: this.state.data.concat({ no: 7, name: "화사", age: 26, done: true }),
        });
    };

    onClick2 = () => {
        this.setState({
            data: this.state.data.concat({
                no: 8,
                name: "길동이2",
                age: 30,
                done: false,
            }),
        });
    };

    onDelete = num => {
        console.log(this.state.data);
        this.setState({
            data: this.state.data.filter(value => value.no !== num),
        });
    };

    onModify1 = (num, obj) => {
        const { name, age, done } = obj;

        this.setState({
            data: this.state.data.map(item => {
                if (item.no === num) {
                    return {
                        ...item,
                        name,
                        age,
                        done,
                    };
                } else {
                    return item;
                }
            }),
        });
    };
    onModify2 = num => {
        this.setState({
            data: this.state.data.map(item =>
                item.no === num
                    ? {
                          ...item,
                          name: "수근이",
                          age: 40,
                          done: true,
                      }
                    : item
            ),
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item.no}>
                            {item.no} / {item.name} / {item.age} / {item.done ? "이상" : "이하"}
                        </li>
                    ))}
                </ul>
                <p>
                    <button onClick={this.onClick1}>추가1</button>
                    <button onClick={this.onClick2}>추가2</button>
                </p>
                <hr />
                <Test1Sub
                    onDelete={this.onDelete}
                    onModify1={this.onModify1}
                    onModify2={this.onModify2}
                />
            </div>
        );
    }
}

export default Test1;
