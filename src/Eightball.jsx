import React, { useState } from "react";
import responses from "./responses";
import { choice } from "./random";
import './Eightball.css';

const Eightball = ({ answers = responses }) => {
    const [answer, setAnswer] = useState({ msg: 'Think of a Question', color: 'black' });
    function handleClick(e) {
        setAnswer(choice(answers));
    }
    function resetBall(e) {
        setAnswer({ msg: 'Think of a Question', color: 'black' });
    }
    return (
        <>
            <div className="Eightball" onClick={handleClick} style={{ backgroundColor: answer.color }}>
                <h2>{answer.msg}</h2>
            </div>
            <button className="Reset" onClick={resetBall}>Reset</button>
        </>
    );
}

export default Eightball;