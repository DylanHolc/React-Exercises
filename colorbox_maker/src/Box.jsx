import React from "react";

const Box = ({ id, height, width, handleRemove, backgroundColor }) => {
    const removeBox = () => {
        handleRemove(id)
    }
    return (
        <>
            <div style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: `${backgroundColor}`
            }}>
                <button onClick={removeBox}>X</button>
            </div>
        </>
    )
}

export default Box;