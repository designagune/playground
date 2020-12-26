import React, { Component } from "react";

class Test5 extends Component {
    render() {
        const myName = "거니";
        return (
            <div>
                <Sub
                    name={myName}
                    age={20}
                    addr="서초?"
                    tel="010-0000-0000"
                    gender="남자"
                    done
                    bgColor="tomato"
                />
            </div>
        );
    }
}

class Sub extends Component {
    render() {
        const { name, age, addr, tel, gender, done, bgColor } = this.props;
        return (
            <div>
                <p>{name}</p>
                <p>{age}</p>
                <p>{addr}</p>
                <p style={{ backgroundColor: bgColor }}>{tel}</p>
                <p>{gender}</p>
                {done ? <button>로그인</button> : <button>로그아웃</button>}
            </div>
        );
    }
}

export default Test5;
