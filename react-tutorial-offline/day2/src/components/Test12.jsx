import React, { Component } from "react";

class Test12 extends Component {
    state = {
        data: [
            { id: 1, name: "고길동", age: 33, addr: "강남", done: false },
            { id: 2, name: "하동훈", age: 40, addr: "사천", done: true },
            { id: 3, name: "전소미", age: 21, addr: "청담", done: true },
            { id: 4, name: "쯔위", age: 20, addr: "고잔", done: true },
            { id: 5, name: "공유", age: 36, addr: "청라", done: true },
        ],
    };

    onClick1 = () =>
        this.setState({
            data: this.state.data.filter((item) => item.id > 1),
        });

    onClick2 = () => {};
    onClick3 = () => {};
    onClick4 = (stateNum) =>
        this.setState({
            data: this.state.data.filter((item) => item.id !== stateNum),
        });

    onClick5 = (값) =>
        this.setState({
            data: this.state.data.map((item) => {
                if (item.id === 값) return { ...item, name: "헤헤", age: 10, addr: "부산" };
                else return item;
            }),
        });
    onClick6 = () => {};

    render() {
        const {
            state: { data },
        } = this;
        return (
            <div>
                <p>
                    <button onClick={this.onClick1}>1번삭제</button>
                    <button onClick={this.onClick4}>4번삭제</button>
                    <button onClick={this.onClick5}>5번삭제</button>
                </p>
                <p>
                    <button onClick={() => this.onClick4(2)}>몇번을</button>
                    <button onClick={() => this.onClick4(4)}>지우고싶느냐</button>
                </p>
                <p>
                    <button onClick={() => this.onClick5(1)}>1번을 변경하겠다</button>
                    <button onClick={() => this.onClick5(2)}>2번을 변경하겠다</button>
                    <button onClick={() => this.onClick5(3)}>3번을 변경하겠다</button>
                </p>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.id} / {item.name} / {item.age} / {item.addr} /
                            {item.done && <button>확인</button>}
                            {item.done || <button>취소</button>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Test12;
