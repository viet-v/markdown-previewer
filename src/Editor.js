import React, { useState } from 'react';


function Editor({ onTextChange }) {
    const [inputState, setInputState] = useState('`<div>some code</div>`');

    const handleChange = (event) => {
        onTextChange(event.target.value);
        setInputState(event.target.value);
    }

    return (
        <div className="panel">
            <div className="panel-head">
                Editor
            </div>
            <textarea id="editor" onChange={handleChange} value={inputState}></textarea>
        </div>
    )
}

export default Editor;