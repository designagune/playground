import React, { Component } from "react";

class Test2 extends Component {
    nameInput = React.createRef();
    state = {
        username: "",
        userpw: "",
        addr: "",
    };

    onChange = (e) => {
        const {
            target: { value, name },
        } = e;
        this.setState({ [name]: value });
    };

    onReset = () => {
        this.setState({ username: "", userpw: "", addr: "" });

        console.log(this.nameInput);
        this.nameInput.current.focus();
    };

    render() {
        const {
            state: { username, userpw, addr },
            onChange,
        } = this;

        return (
            <div>
                <input
                    type="text"
                    name="username"
                    onChange={onChange}
                    value={username}
                    ref={this.nameInput}
                />
                <input type="text" name="userpw" onChange={onChange} value={userpw} />
                <input type="text" name="addr" onChange={onChange} value={addr} />
                <button onClick={this.onReset}>초기화</button>
                <p>
                    이름 : {username} / 비밀번호 : {userpw} / 주소 : {addr} /
                </p>
            </div>
        );
    }
}

export default Test2;
