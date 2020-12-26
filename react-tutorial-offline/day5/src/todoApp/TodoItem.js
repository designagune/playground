import React, { Component } from "react";

class TodoItem extends Component {
    state = { done: false };
    onClick = () => this.setState({ done: !this.state.done });
    render() {
        const { todosEl, onRemove } = this.props;
        const { done } = this.state;
        return (
            <>
                <li>
                    <span onClick={this.onClick} className={done && "active"}>
                        &#8730;
                    </span>
                    <p onClick={this.onClick} className={done && "active"}>
                        {todosEl.text}
                    </p>
                    <button onClick={() => onRemove(todosEl.no)}>삭제</button>
                </li>
            </>
        );
    }
}

export default TodoItem;
