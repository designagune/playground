import React, { Component } from "react";
import "./Todo.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Todo extends Component {
    no = 0;
    state = {
        todos: [],
    };

    onAdd = (text) => {
        const { todos } = this.state;
        this.setState({ todos: todos.concat({ no: this.no++, text }) });
    };

    onRemove = (contents) => {
        const { todos } = this.state;
        this.setState({ todos: todos.filter((todo) => todo.no !== contents) });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="Todo">
                <h2>Todo List</h2>
                <TodoForm onAdd={this.onAdd} />
                <TodoList todos={todos} onRemove={this.onRemove} />
            </div>
        );
    }
}

export default Todo;
