import React, { Component } from "react";

class Test2 extends Component {
    render() {
        const name = "건이";
        const age = 20;
        const addr = "Suwon";
        const tel = "010-0000-0000";
        const gender = "남자";

        return (
            <div>
                <h2>이름 : {name}</h2>
                <p>나이 : {age}</p>
                <p>주소 : {addr}</p>
                <p>전화번호 : {tel}</p>
                <p>성별 : {gender}</p>
                <p
                //주석가능
                /*가능 */
                >
                    jsx구문
                </p>
            </div>
        );
    }
}

export default Test2;
