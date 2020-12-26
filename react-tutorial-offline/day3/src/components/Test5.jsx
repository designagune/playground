import React, { Component } from "react";

class Test5 extends Component {
    no = 1;
    id = 1;

    state = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
    };

    onAdd1 = () => {
        this.setState({
            data1: this.state.data1.concat({ name: "길동이" }),
        });
    };
    onAdd2 = () => {
        this.setState({
            data2: this.state.data2.concat({
                name: "둘리" + Math.floor(Math.random() * 10),
                age: Math.floor(Math.random() * 80 + 20),
            }),
        });
    };
    onAdd3 = () => {
        this.setState({
            data3: this.state.data3.concat({ no: this.no++ }),
        });
    };
    onAdd4 = () => {
        this.setState({
            data4: this.state.data4.concat({
                id: this.id++,
                name: "개똥이" + Math.floor(Math.random() * 10),
                age: Math.floor(Math.random() * 20 + 10),
            }),
        });
    };

    onRemove = num => {
        this.setState({
            data4: this.state.data4.filter(val => val.id !== num),
        });
    };

    onModify1 = () => {};
    onModify2 = num => {
        this.setState({
            data4: this.state.data4.map(item =>
                item.id === num ? { ...item, name: "유인나", age: 33 } : item
            ),
        });
    };

    render() {
        const {
            state: { data1, data2, data3, data4 },
        } = this;
        return (
            <div>
                <p>
                    <button onClick={this.onAdd1}>data1추가</button>
                    <button onClick={this.onAdd2}>data2추가</button>
                    <button onClick={this.onAdd3}>data3추가</button>
                    <button onClick={this.onAdd4}>data4추가</button>
                </p>
                <p>
                    <button onClick={() => this.onRemove(1)}>data4 1삭제</button>
                    <button onClick={() => this.onRemove(3)}>data4 3삭제</button>
                </p>
                <p>
                    <button onClick={this.onModify1}>data4 2수정</button>
                    <button onClick={() => this.onModify2(4)}>data4 4수정</button>
                </p>
                <hr />
                <h2>data1[]</h2>
                {data1.map((val, idx) => (
                    <p key={idx}>
                        {idx} / {val.name}
                    </p>
                ))}
                <hr />
                <h2>data2[]</h2>
                {data2.map((val, idx) => (
                    <p key={idx}>
                        {idx} / {val.name} / {val.age}
                    </p>
                ))}
                <hr />
                <h2>data3[]</h2>
                {data3.map(val => (
                    <p key={val.no}>{val.no}</p>
                ))}
                <hr />
                <h2>data4[]</h2>
                {data4.map(val => (
                    <p key={val.id}>
                        번호 : {val.id} / 이름 : {val.name} / 나이 : {val.age}
                    </p>
                ))}
            </div>
        );
    }
}

export default Test5;
