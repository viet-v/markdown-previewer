import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMarkdown } from './redux-actions';


function Editor({ markdown, updateMarkdown }) {

    const [inputState, setInputState] = useState('');

    const handleChange = (event) => {
        updateMarkdown(event.target.value);
        setInputState(event.target.value);
    }

    return (
        <div className="panel">
            <div className="panel-head">
                Editor
            </div>
            <textarea id="editor" onChange={handleChange} value={markdown}></textarea>
        </div>
    )
}

const mapStateToProps = (state) => ({
    markdown: state.markdown
})

const mapDispatchToProps = {
    updateMarkdown
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);