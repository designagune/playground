import React, { Component } from "react";

class Test3 extends Component {
    state = {
        count: 0,
    };

    increase = () => this.setState({ count: this.state.count + 1 });
    decrease = () => this.setState({ count: this.state.count - 1 });

    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>카운트 : {count}</h2>
                <p>
                    <button onClick={this.increase}>증가</button>
                    <button onClick={this.decrease}>감소</button>
                </p>
            </div>
        );
    }
}

export default Test3;
