import React, { Component } from "react";
import Test7Sub0 from "./Test7Sub0";
import Test7Sub1 from "./Test7Sub1";

class Test7 extends Component {
    inputRef = React.createRef();
    number = 1;
    state = {
        text: "",
        data: [],
    };

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    onCreate = (e) => {
        e.preventDefault();

        const { data, text } = this.state;

        if (text !== "") {
            this.setState(
                {
                    data: data.concat({
                        no: this.number++,
                        name: text,
                        done: false,
                    }),
                },
                this.setState({ text: "" })
            );
            this.inputRef.current.focus();
        } else alert("아무것도 입력되지 않았습니다.");
    };

    onDelete = (num) => {
        const { data } = this.state;
        this.setState({
            data: data.filter((filtEl) => filtEl.no !== num),
        });
    };

    render() {
        const { data, text } = this.state;
        return (
            <div
                style={{
                    width: 300,
                    marginTop: 0,
                    marginRight: "auto",
                    marginBottom: 0,
                    marginLeft: "auto",
                }}
            >
                <h2>submit엔터</h2>
                <Test7Sub0
                    onCreate={this.onCreate}
                    onRef={this.inputRef}
                    onChange={this.onChange}
                    data={data}
                    text={text}
                />
            </div>
        );
    }
}

export default Test7;
