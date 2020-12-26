import React, { Component } from "react";

class Test7 extends Component {
    state = {
        userid: "",
        userpw: "",
        email: "",
    };

    onChange1 = event => {
        const {
            target: { value },
        } = event;

        this.setState({ userid: value });
    };
    onChange2 = event => {
        const {
            target: { value },
        } = event;

        this.setState({ userpw: value });
    };
    onChange3 = event => {
        const {
            target: { value },
        } = event;

        this.setState({ email: value });
    };

    onReset = () => {
        this.setState({ userid: "", userpw: "", email: "" });
    };

    render() {
        const {
            state: { userid, userpw, email },
        } = this;
        return (
            <div>
                <p>
                    <input type="text" onChange={this.onChange1} value={userid} />
                    <input type="text" onChange={this.onChange2} value={userpw} />
                    <input type="text" onChange={this.onChange3} value={email} />
                    <button type="button" onClick={this.onReset}>
                        초기화
                    </button>
                    <h4>아이디 : {userid}</h4>
                    <h4>비번 : {userpw}</h4>
                    <h4>이메일 : {email}</h4>
                </p>
            </div>
        );
    }
}

export default Test7;
