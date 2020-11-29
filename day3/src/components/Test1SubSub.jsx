import React, { Component } from "react";

class Test1SubSub extends Component {
    render() {
        const {
            props: { onModify1, onModify2 },
        } = this;
        return (
            <div>
                <h2>Test1SubSub</h2>
                <p>
                    <button onClick={() => onModify1(2, { name: "공실이", age: 21, done: true })}>
                        수정2
                    </button>
                    <button onClick={() => onModify2(4)}>수정4</button>
                    <button>수정3</button>
                </p>
            </div>
        );
    }
}

export default Test1SubSub;
