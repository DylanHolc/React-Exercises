import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ createTodo }) => {
    const INITIAL_STATE = '';
    const [task, setTask] = useState(INITIAL_STATE);

    const createNewTodo = (e) => {
        e.preventDefault();
        createTodo({ task, id: uuid() });
        setTask(INITIAL_STATE);
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <div>
            <form onSubmit={createNewTodo}>
                <label htmlFor="task">Task: </label>
                <input type="text"
                    id="task"
                    name="task"
                    value={task}
                    onChange={handleChange}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;