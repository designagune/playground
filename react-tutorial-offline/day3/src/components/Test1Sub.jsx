import React, { Component } from "react";
import Test1SubSub from "./Test1SubSub";

class Test1sub extends Component {
    render() {
        const {
            props: { onDelete, onModify1, onModify2 },
        } = this;

        return (
            <div>
                <h4>TestSub</h4>
                <p>
                    <button onClick={() => onDelete(1)}>1번삭제</button>
                    <button onClick={() => onDelete(3)}>3번삭제</button>
                    <button onClick={() => onDelete(5)}>5번삭제</button>
                </p>
                <hr />
                <Test1SubSub onModify1={onModify1} onModify2={onModify2} />
            </div>
        );
    }
}

export default Test1sub;
