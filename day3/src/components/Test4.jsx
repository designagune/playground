import React, { Component } from "react";

class Test4 extends Component {
    state = { count: 0 };

    increase = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    };

    increase2 = () => {
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
        this.setState(state => ({ count: state.count + 1 }));
        this.setState(state => ({ count: state.count + 1 }));
    };

    decrease2 = () => {
        this.setState({ count: this.state.count - 1 });
        this.setState({ count: this.state.count - 1 });
    };

    increase3 = () => {
        this.setState((state, props) => {
            return {
                count: state.count + 1,
            };
        });

        this.setState(state => {
            return {
                count: state.count + 1,
            };
        });
    };

    decrease3 = () => {
        this.setState(state => {
            return { count: state.count - 1 };
        });

        this.setState(state => {
            return { count: state.count - 1 };
        });
    };

    increase4 = () => {
        this.setState(
            {
                count: this.state.count + 1,
            },
            () =>
                this.setState(
                    {
                        count: this.state.count + 1,
                    },
                    () =>
                        this.setState({
                            count: this.state.count + 1,
                        })
                )
        );
    };

    decrease4 = () => {};

    increase5 = () => {
        for (let i = 0; i < 5; i++) {
            this.setState(state => {
                return {
                    count: state.count + 1,
                };
            });
        }
    };

    render() {
        return (
            <div>
                <h2>count : {this.state.count}</h2>
                <p>
                    <button onClick={this.increase}>1씩증가</button>
                    <button onClick={this.decrease}>1씩감소</button>
                </p>
                <p>
                    <button onClick={this.increase2}>2씩증가</button>
                    <button onClick={this.decrease2}>2씩감소</button>
                </p>
                <p>
                    <button onClick={this.increase3}>2씩증가</button>
                    <button onClick={this.decrease3}>2씩감소</button>
                </p>
                <p>
                    <button onClick={this.increase4}>2씩증가</button>
                    <button onClick={this.decrease4}>2씩감소</button>
                </p>

                <p>
                    <button onClick={this.increase5}>5씩증가</button>
                    <button onClick={this.decrease5}>2씩감소</button>
                </p>
            </div>
        );
    }
}

export default Test4;
