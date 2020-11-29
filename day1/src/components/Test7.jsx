import React, { Component } from "react";

class Test7 extends Component {
    state = {
        name: "NAME", //초기값
    };

    onClick1 = () => this.setState({ name: "민상이" });
    onClick2 = () => this.setState({ name: "건이" });
    onClick3 = () => this.setState({ name: "김충선" });
    onClick4 = () => this.setState({ name: "뚱인데요" });

    render() {
        const {
            state: { name },
        } = this;

        return (
            <div>
                <h2>{name}</h2>
                <p>
                    <button onClick={this.onClick1}>홍길동</button>
                    <button onClick={this.onClick2}>강호동</button>
                    <button onClick={this.onClick3}>명동</button>
                    <button onClick={this.onClick4}>정자동</button>
                </p>
            </div>
        );
    }
}

export default Test7;
