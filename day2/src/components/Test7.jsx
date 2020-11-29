import React, { Component } from "react";

class Test7 extends Component {
    render() {
        const title = "원정대";
        const arr = ["실비", "은비", "천옥", "만옥"];
        return (
            <div>
                <h2> map : {title}</h2>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
                <p>{arr[2]}</p>
                <p>{arr[3]}</p>
                <hr />
                <h3>map1</h3>
                {arr.map((val, idx) => (
                    <p key={idx}>
                        {idx} / {val}
                    </p>
                ))}
                <h3>map2</h3>
            </div>
        );
    }
}

export default Test7;
