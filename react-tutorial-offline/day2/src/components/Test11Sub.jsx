import React, { Component } from "react";
import Test11SubSub from "./Test11SubSub";

class Test11Sub extends Component {
    render() {
        const {
            props: { com, message, click1, click2, click3, click4 },
        } = this;
        return (
            <div>
                <h2>Test2Sub</h2>
                <h3> com : {com}</h3>
                <h3> message : {message}</h3>
                <p>
                    <button onClick={click1}>클릭1</button>
                    <button onClick={() => click3(100)}>클릭3</button>
                    <button onClick={() => click4(50, 20)}>클릭4</button>
                </p>
                <Test11SubSub
                    com={com}
                    message={message}
                    click2={click2}
                    click3={click3}
                    click4={click4}
                    color="tomato"
                />
            </div>
        );
    }
}

export default Test11Sub;
