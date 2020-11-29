import React, { Component } from "react";
import "./style/Test9.css";

class Test9 extends Component {
    state = {
        data: [
            { no: 1, name: "둘리놈", age: 254, addr: "길동이네", done: true },
            { no: 2, name: "고길동", age: 33, addr: "길동이네", done: false },
            { no: 3, name: "도우너", age: 104, addr: "깐따삐야", done: true },
            { no: 4, name: "마이콜", age: 23, addr: "???", done: true },
            { no: 5, name: "둘리엄마", age: 421, addr: "쥬라기", done: false },
            { no: 6, name: "둘리여친", age: 254, addr: "쥬라기탈출?", done: true },
        ],
    };
    render() {
        return (
            <div className="Test9">
                <table>
                    <caption></caption>
                    <colgroup>
                        <col className="no" />
                        <col className="name" />
                        <col className="age" />
                        <col className="addr" />
                        <col className="done" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                            <th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{this.state.data[0].no}</td>
                            <td>{this.state.data[0].name}</td>
                            <td>{this.state.data[0].age}</td>
                            <td>{this.state.data[0].addr}</td>
                            <td>{this.state.data[0].done ? "참여" : "미참여"}</td>
                        </tr> */}
                        {this.state.data.map((val) => {
                            const { no, name, age, addr, done } = val;
                            return (
                                <tr key={no}>
                                    <td>{no}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{addr}</td>
                                    <td>{done ? "참여" : "미참여"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test9;
