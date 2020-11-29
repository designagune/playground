import React, { Component } from "react";

class Test6 extends Component {
    onClick1 = (who) => alert(who);
    onClick2 = () => alert("두번째");
    onClick3 = () => alert("세 번째");
    onClick4 = (num) => alert(`값 ${num}`);

    render() {
        return (
            <div>
                <button onClick={() => this.onClick1("민상이")}>바뜬1</button>
                <button onClick={this.onClick2}>바뜬2</button>
                <button onClick={this.onClick3}>바뜬3</button>
                <button onClick={() => this.onClick4(40)}>바뜬4</button>
            </div>
        );
    }
}

export default Test6;
