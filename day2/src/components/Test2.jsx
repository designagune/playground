import React, { Component } from "react";

class Test2 extends Component {
    render() {
        const title = "타이뜰";
        return (
            <div>
                <h2>메인 {title}</h2>
                <Test2Sub title={title} name="길동이" age={20} addr="갱냄" color="hotpink" />
            </div>
        );
    }
}

class Test2Sub extends Component {
    render() {
        const {
            props: { title, name, age, addr, color },
        } = this;
        return (
            <div>
                <h2>Sub{title}</h2>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>주소 : {addr}</li>
                    <li style={{ color }}>색 : {color}</li>
                </ul>
                <hr />
                <Test2SubSub name={name} age={age} color="green" msg="지금은 ..?뭐지" />
            </div>
        );
    }
}

class Test2SubSub extends Component {
    render() {
        const {
            props: { name, age, color, msg },
        } = this;

        return (
            <div>
                <h2>SubSub</h2>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>메세지 : {msg}</li>
                    <li style={{ backgroundColor: color }}>색 : {color}</li>
                </ul>
            </div>
        );
    }
}

export default Test2;
