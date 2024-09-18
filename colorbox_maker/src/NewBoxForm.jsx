import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { height: '', width: '', backgroundColor: '' }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }));
    }

    const createNewBox = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() })
        setFormData(INITIAL_STATE)
    }


    return (
        <div>
            <form onSubmit={createNewBox}>
                <label htmlFor="height">Height: </label>
                <input type="text"
                    name="height"
                    id="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor="width">Width: </label>
                <input type="text"
                    name="width"
                    id="width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="backgroundColor">Background Color: </label>
                <input type="text"
                    name="backgroundColor"
                    id="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
                <div>
                    <button id="createBoxBtn">Create Box</button>
                </div>
            </form>
        </div>
    )
}

export default NewBoxForm;