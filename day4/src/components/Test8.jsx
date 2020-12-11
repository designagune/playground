import React, { Component } from "react";

class Test8 extends Component {
    no = 1;
    state = {
        data: [],
    };

    onInsert = (text) => {
        const { data } = this.state;
        this.setState({
            data: data.concat({ no: this.no++, text }),
        });
    };

    onDelete = (num) => {
        const { data } = this.state;
        this.setState({
            data: data.filter((filtEl) => filtEl.no !== num),
        });
    };

    render() {
        const { data } = this.state;
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
                <h2>TODO</h2>
                <Form onInsert={this.onInsert} />
                <List data={data} onDelete={this.onDelete} />
            </div>
        );
    }
}

class Form extends Component {
    textInput = React.createRef();
    state = {
        text: "",
    };

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        });
    };

    onCreate = (e) => {
        e.preventDefault();
        const { onInsert } = this.props;
        onInsert(this.state.text);
        this.setState({
            text: "",
        });
        this.textInput.current.focus();
    };

    render() {
        const { text } = this.state;
        return (
            <form onSubmit={this.onCreate}>
                <input
                    type="text"
                    value={text}
                    name="text"
                    onChange={this.onChange}
                    ref={this.textInput}
                />
                <button type="submit">추가</button>
            </form>
        );
    }
}

class List extends Component {
    render() {
        const { data, onDelete } = this.props;
        return (
            <ul>
                {data.map((el) => (
                    <Item key={el.no} el={el} onDelete={onDelete} />
                ))}
            </ul>
        );
    }
}

class Item extends Component {
    render() {
        const { el, onDelete } = this.props;
        const { no, text } = el;
        return (
            <li>
                {no} / {text}{" "}
                <button
                    onClick={() => onDelete(no)}
                    style={{ width: 30, height: 20, fontSize: 12 }}
                >
                    삭제
                </button>
            </li>
        );
    }
}

export default Test8;
