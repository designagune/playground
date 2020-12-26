import React, { Component } from "react";

class Test11SubSub extends Component {
    render() {
        const {
            props: { com, message, click2, click3, click4, color },
        } = this;
        return (
            <div>
                <h3>com : {com}</h3>
                <h3>message : {message}</h3>
                <p>
                    <button onClick={click2}>클릭2</button>
                    <button onClick={() => click3(300)}>클릭3</button>
                    <button onClick={() => click4(100, 200)}>클릭4</button>
                </p>
            </div>
        );
    }
}

export default Test11SubSub;
