import React, { Component } from "react";
import "./melonForm.css";

class MelonForm extends Component {
    state = {
        text: "",
    };

    onChange = (e) => {
        const { value } = e.target;

        this.setState({ text: value }, () => {
            this.props.onText(this.state.text);
        });
    };

    render() {
        const { text } = this.state;
        return (
            <div className="melonForm">
                <input
                    type="text"
                    onChange={this.onChange}
                    value={text}
                    placeholder="음악명 입력하시던가"
                />
            </div>
        );
    }
}

export default MelonForm;
