import React, { Component } from "react";

class Test1 extends Component {
    render() {
        const title = "신상명세서";
        const name = "길동이";
        const age = 21;
        const addr = "강남";
        const done = true;
        const color = {
            color: "white",
            fontSize: 16,
            backgroundColor: "hotpink",
        };

        return (
            <div>
                <h1>상수 : {} - JSX</h1>
                <h2 style={color}>{title}</h2>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>주소 : {addr}</li>
                    <li>{done ? "confirm" : "cancel"}</li>
                    <li>{done && "confirm1"}</li>
                    <li>{done || "cancel"}</li>
                </ul>
            </div>
        );
    }
}

export default Test1;
