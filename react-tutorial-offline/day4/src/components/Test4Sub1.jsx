import React, { Component } from "react";

class Test4Sub1 extends Component {
    render() {
        const {
            props: { onPlusStep, onChange },
        } = this;

        return (
            <div className="Test4">
                <div className="inner">
                    <ul>
                        <li>
                            <label htmlFor="lastName">성</label>
                            :<input text="text" id="lastName" name="lastName" onChange={onChange} />
                        </li>
                        <li>
                            <label htmlFor="firstName">이름</label>
                            :
                            <input
                                text="text"
                                id="firstName"
                                name="firstName"
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <label htmlFor="email">이메일</label>
                            : <input text="text" id="email" name="email" onChange={onChange} />
                        </li>
                    </ul>
                    <p>
                        <button onClick={onPlusStep}>다음</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test4Sub1;
