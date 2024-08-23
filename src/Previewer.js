import React, { Component } from 'react';

class Previewer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="panel">
                <div className="panel-head">
                    Previewer
                </div>
                <div id="preview"></div>
            </div>
        )
    }
}

export default Previewer;