import React, { Component } from "react";
import Test7Sub1 from "./Test7Sub1";

class Test7Sub0 extends Component {
    render() {
        const { onCreate, onRef, onChange, data, text } = this.props;
        return (
            <form onSubmit={onCreate}>
                <input type="text" ref={onRef} name="text" value={text} onChange={onChange} />
                <p>
                    <button type="submit">추가</button>
                </p>
                <ul>
                    {data.map((item) => {
                        return <Test7Sub1 item={item} />;
                    })}
                </ul>
            </form>
        );
    }
}

export default Test7Sub0;
