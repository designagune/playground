import React, { Component } from "react";

class Test8 extends Component {
    render() {
        const data = [
            { id: 1, name: "고길동", age: 33, addr: "강남", done: false },
            { id: 2, name: "하동훈", age: 40, addr: "사천", done: true },
            { id: 3, name: "전소미", age: 21, addr: "청담", done: true },
            { id: 4, name: "쯔위", age: 20, addr: "고잔", done: true },
            { id: 5, name: "공유", age: 36, addr: "청라", done: true },
        ];
        return (
            <div>
                <h2>map</h2>
                <p>
                    {data[0].id} / {data[0].name} / {data[0].addr}
                </p>
                <hr />
                {data.map((val, idx) => {
                    const { id, name, addr, done } = val;
                    return (
                        <p key={idx}>
                            {id} / {name} / {addr} / {done ? "확인" : "취소"}
                        </p>
                    );
                })}
                <hr />
                {data.map((val, idx) => {
                    const { id, name, addr, done } = val;
                    return (
                        <p key={id}>
                            {id} / {name} / {addr} / {done && <button>확인</button>} /
                            {done || <button>취소</button>}
                        </p>
                    );
                })}
            </div>
        );
    }
}

export default Test8;
