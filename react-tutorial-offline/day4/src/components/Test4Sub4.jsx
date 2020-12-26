import React, { Component } from "react";

class Test4Sub4 extends Component {
    render() {
        const { props } = this;
        const { onBack } = props;
        return (
            <div className="Test4">
                <div className="inner">
                    <strong>설문조사 답변 감사합니다.</strong>
                    <p>오늘도 홧팅하세요~</p>
                    <p>
                        <button onClick={onBack}>처음으로</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test4Sub4;
