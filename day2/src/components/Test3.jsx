import React, { Component } from "react";
import Test3Sub from "./Test3Sub";

class Test3 extends Component {
    render() {
        return (
            <div>
                <h2> SubClass, props, type, default</h2>
                <Test3Sub
                    name="길동이"
                    age={26}
                    addr="홍대"
                    tel="000-222-6666"
                    gender="male"
                    color="tomato"
                    done={true}
                />
                <Test3Sub name="고길동" age={33} gender="male" color="deepblue" />
                <Test3Sub />
            </div>
        );
    }
}

export default Test3;
