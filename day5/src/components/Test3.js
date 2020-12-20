import React, { Component } from "react";

class Test3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        console.log(1);
    }

    increase = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    };
    decrease = () => {
        const { count } = this.state;
        this.setState({ count: count - 1 });
    };

    componentDidMount() {
        console.log(3);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(4);
        console.log(prevProps, prevState);
    }

    render() {
        console.log(2);
        const { count } = this.state;
        return (
            <div>
                <h2>숫자 증감 : {count}</h2>
                <button onClick={this.increase}>증</button>
                <button onClick={this.decrease}>감</button>
            </div>
        );
    }
}

export default Test3;
