import React, { Component } from "react";

class Test3 extends Component {
    render() {
        const title = "젬....ㅗㄱ";
        const msg = "설명이라고함";
        const style1 = {
            fontSize: "20px",
            lineHeight: "30px",
            backgroundColor: "tomato",
        };
        return (
            <div>
                <h2
                    style={{
                        fontSize: "40px",
                        color: "lightgreen",
                        backgroundColor: "#888",
                    }}
                >
                    {title}
                </h2>
                <p style={style1}>{msg}</p>
            </div>
        );
    }
}

export default Test3;
