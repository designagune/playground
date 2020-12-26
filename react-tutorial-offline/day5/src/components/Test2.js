import React, { Component } from "react";

class Test2 extends Component {
    textInput = React.createRef();
    state = {
        text: "",
        pwd: "",
    };
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onClick = () => {
        this.setState({ text: "", pwd: "" });
        this.textInput.current.focus();
    };
    render() {
        const { text, pwd } = this.state;
        return (
            <div>
                <input
                    ref={this.textInput}
                    type="text"
                    onChange={this.onChange}
                    name="text"
                    value={text}
                />
                <input type="password" onChange={this.onChange} name="pwd" value={pwd} />

                <button onClick={this.onClick} disabled={pwd.length <= 6 && true}>
                    확인
                </button>
                <h2>{pwd.length}</h2>
            </div>
        );
    }
}

export default Test2;
