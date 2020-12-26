import React, { Component } from "react";

class Test7Sub1 extends Component {
    render() {
        const { no, name, done } = this.props.item;
        return (
            <li key={no}>
                {no} / {name} / {done ? "참" : "거짓"} /{" "}
                <button
                    onClick={() => this.onDelete(no)}
                    style={{
                        width: 30,
                        height: 20,
                        fontSize: "0.9rem",
                        cursor: "pointer",
                    }}
                >
                    삭제
                </button>
            </li>
        );
    }
}

export default Test7Sub1;
