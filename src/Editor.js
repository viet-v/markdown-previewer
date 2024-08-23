import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="panel">
                <div className="panel-head">
                    Editor
                </div>
                <textarea id="editor"></textarea>
            </div>
        )
    }
}

export default Editor;