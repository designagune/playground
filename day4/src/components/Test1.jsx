import React, { Component } from "react";

class Test1 extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>input</h2>
                    <p>
                        <input
                            type="text"
                            onChange={(e) => this.setState({ text1: e.target.value })}
                        />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ text2: e.target.value })}
                        />
                    </p>
                    <p>
                        {this.state.text1} / {this.state.text2}
                    </p>
                </div>
            </div>
        );
    }
}

export default Test1;
