import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ColorPickerForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initialState = {
        name: '',
        color: ''
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let colors = location.state;
        const { name, color } = formData;
        colors.unshift({ name, color });
        setFormData(initialState);
        navigate('/colors', { state: { colors } });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="color">Color Value:</label>
                <input type="color" name="color" id="color" value={formData.color} onChange={handleChange} />
                <button type="submit">Add Color</button>
            </form>
            <Link to={'/colors'}>Go Back</Link>
        </div>
    )

}
export default ColorPickerForm;