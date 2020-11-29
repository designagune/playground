import React, { Component } from "react";

class Test10 extends Component {
    no = 1;
    state = {
        data: [],
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
        const {
            state: { data, username, age, addr },
        } = this;
        this.setState({
            data: data.concat({ no: this.no++, username, age, addr }),
            username: "",
            age: "",
            addr: "",
        });
        this.onFocus.focus();
    };

    onRemove = num => {
        const {
            state: { data },
        } = this;
        this.setState({
            data: data.filter(val => val.no !== num),
        });
    };

    render() {
        const {
            state: { username, age, addr, data },
            onChange,
            onReset,
            onRemove,
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
                        추가
                    </button>
                </p>
                <hr />
                <ul>
                    {/*번호 이름 나이 주소 - 누적 */}
                    {data.map(item => (
                        <li key={item.no}>
                            {item.no} / {item.username} / {item.age} / {item.addr}
                            <button onClick={() => onRemove(item.no)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Test10;
