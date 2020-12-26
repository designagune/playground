import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

class TodoList extends Component {
    render() {
        const { todos, onRemove } = this.props;
        return (
            <div className="TodoList">
                <ul>
                    {todos.map((todosEl) => (
                        <TodoItem key={todosEl.no} todosEl={todosEl} onRemove={onRemove} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
