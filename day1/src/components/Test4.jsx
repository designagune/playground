import React, { Component } from "react";

class Test4 extends Component {
    render() {
        const done = true;
        return (
            <div>
                <p>{done ? <button>로그인</button> : <button>로그아웃</button>}</p>
                <p>{done && <button>로그인</button>}</p>
            </div>
        );
    }
}

export default Test4;
