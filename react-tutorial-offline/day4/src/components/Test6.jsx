import React, { Component } from "react";

class Test6 extends Component {
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

    onCreate = () => {
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
                <input
                    type="text"
                    ref={this.inputRef}
                    name="text"
                    value={text}
                    onChange={this.onChange}
                />
                <p>
                    <button onClick={this.onCreate}>추가</button>
                </p>
                <ul>
                    {data.map((item) => {
                        const { no, name, done } = item;
                        return (
                            <li key={no}>
                                {no} / {name} / {done ? "참" : "거짓"} /{" "}
                                <button
                                    onClick={() => this.onDelete(no)}
                                    style={{
                                        width: 30,
                                        height: 20,
                                        fontSize: "0.9rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    삭제
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Test6;
