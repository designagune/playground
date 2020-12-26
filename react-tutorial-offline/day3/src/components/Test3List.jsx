import React, { Component } from "react";
import Test3Item from "./Test3Item";

class Test3List extends Component {
    render() {
        const {
            props: { data, onRemove },
        } = this;
        return (
            <>
                {data.map(item => (
                    <Test3Item item={item} key={item.no} onRemove={onRemove} />
                ))}
            </>
        );
    }
}

export default Test3List;
