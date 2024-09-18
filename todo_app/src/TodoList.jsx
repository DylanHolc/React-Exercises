import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE)

    const createTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }
    const updateTodo = (id, newTask) => {
        setTodos(todos => todos.map(todo => todo.id === id ? { ...todos, task: newTask } : todo))
    }
    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={updateTodo}
            remove={removeTodo}
        />
    ));
    return (
        <>
            <NewTodoForm createTodo={createTodo} />
            <ul>{todoComponents}</ul>
        </>
    )
}

export default TodoList;