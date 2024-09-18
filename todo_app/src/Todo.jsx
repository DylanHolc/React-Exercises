import React, { useState } from "react";

const Todo = ({ id, task, remove, update }) => {
    const [editedTask, setEditedTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => remove(id);

    const toggleEditing = () => {
        setIsEditing(condition => !condition);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        update(id, editedTask);
        setIsEditing(false);
    }

    const handleChange = (e) => {
        setEditedTask(e.target.value)
    }

    if (isEditing) {
        return (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={editedTask} onChange={handleChange} />
                    <button>Update</button>
                </form>
            </div>
        )
    }
    else {
        return (
            <div>
                <li>{task}</li>
                <button onClick={toggleEditing}>Edit</button>
                <button onClick={handleDelete}>X</button>
            </div>
        )
    }
}

export default Todo;
