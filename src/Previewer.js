import React, { forwardRef, useEffect } from 'react';
import { marked } from 'marked';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.min.css';


function Previewer({ markdown }, ref) {

    const rawInput = marked(markdown);
    const cleanInput = DOMPurify.sanitize(rawInput);

    const renderMarkdown = () => {
        console.log('DOMPurify: ' + DOMPurify.removed);
        return { __html: cleanInput }
    };

    useEffect(() => {
        document.querySelectorAll("code").forEach(code => {
            hljs.highlightElement(code);
        })
    }, [markdown]);

    return (
        <div ref={ref} className="panel">
            <div className="panel-head">
                Previewer
            </div>
            <div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    markdown: state.markdown
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(forwardRef(Previewer));