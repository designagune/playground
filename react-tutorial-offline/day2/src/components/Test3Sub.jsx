import React, { Component } from "react";
import PropTypes from "prop-types";

class Test3Sub extends Component {
    render() {
        const {
            props: { name, age, addr, tel, gender, color, done },
        } = this;

        return (
            <div
                style={{
                    border: "1px solid",
                    width: 400,
                    padding: 20,
                    borderColor: color,
                    marginBotton: 50,
                }}
            >
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>주소 : {addr}</li>
                    <li>전화 : {tel}</li>
                    <li>성별 : {gender}</li>
                    <li>{done ? "참참참?" : "마구니"}</li>
                    <li>{done && "참이다 이녀석아"}</li>
                    <li>{done || "마구니"}</li>
                </ul>
            </div>
        );
    }
}

export default Test3Sub;

Test3Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    addr: PropTypes.string,
    gender: PropTypes.string,
    tel: PropTypes.string,
    done: PropTypes.bool,
};

Test3Sub.defaultProps = {
    name: "네놈은 누구냐",
    age: 16,
    addr: "어디사느냐 물었다",
    tel: "ㅈ..저 번호가 어떻게 되세요..?",
    done: false,
    gender: "계집년이냐 사내녀석이냐?!",
};
