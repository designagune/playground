import React, { Component } from "react";

class Test9 extends Component {
    state = {
        username: "",
        age: "",
        addr: "",
    };

    onFocus = null;

    onChange = event => {
        const {
            target: { value, name },
        } = event;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    onReset = () => {
        this.setState({
            username: "",
            age: "",
            addr: "",
        });
        this.onFocus.focus();
    };

    render() {
        const {
            state: { username, age, addr },
            onChange,
            onReset,
        } = this;

        return (
            <div>
                <p>
                    이름 :
                    <input
                        type="text"
                        onChange={onChange}
                        value={username}
                        name="username"
                        ref={ref => (this.onFocus = ref)}
                    />
                    나이 : <input type="text" onChange={onChange} value={age} name="age" />
                    주소 : <input type="text" onChange={onChange} value={addr} name="addr" />
                    <button type="button" onClick={onReset}>
                        초기화
                    </button>
                </p>
            </div>
        );
    }
}

export default Test9;
