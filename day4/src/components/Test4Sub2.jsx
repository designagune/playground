import React, { Component } from "react";

class Test4Sub2 extends Component {
    render() {
        const {
            props: { onMinusStep, onPlusStep, onChange },
        } = this;

        return (
            <div className="Test4">
                <div className="inner">
                    <ul>
                        <li>
                            <label htmlFor="occ">직업</label>
                            : <input text="text" id="occ" name="occ" onChange={onChange} />
                        </li>
                        <li>
                            <label htmlFor="tel">연락처</label>
                            : <input text="text" id="tel" name="tel" onChange={onChange} />
                        </li>
                        <li>
                            <label htmlFor="addr">주소</label>
                            : <input text="text" id="addr" name="addr" onChange={onChange} />
                        </li>
                    </ul>
                    <p>
                        <button onClick={onMinusStep}>이전</button>
                        <button onClick={onPlusStep}>결과</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test4Sub2;
