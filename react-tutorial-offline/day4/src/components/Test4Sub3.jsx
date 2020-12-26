import React, { Component } from "react";

class Test4Sub3 extends Component {
    render() {
        const {
            props: {
                state: { lastName, firstName, email, occ, tel, addr },
                onMinusStep,
                onPlusStep,
            },
        } = this;

        return (
            <div>
                <div className="Test4">
                    <div className="inner">
                        <ul>
                            <li>
                                <span>성</span> : {lastName}
                            </li>
                            <li>
                                <span>이름</span> : {firstName}
                            </li>
                            <li>
                                <span>이메일</span> : {email}
                            </li>
                            <li>
                                <span>직업</span> : {occ}
                            </li>
                            <li>
                                <span>연락처</span> : {tel}
                            </li>
                            <li>
                                <span>주소</span> : {addr}
                            </li>
                        </ul>
                        <p>
                            <button onClick={onMinusStep}>이전</button>
                            <button onClick={onPlusStep}>완료</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test4Sub3;
