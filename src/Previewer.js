import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';


function Previewer({ markdown }) {

    return (
        <div className="panel">
            <div className="panel-head">
                Previewer
            </div>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
    )
}

export default Previewer;