import React, { forwardRef } from 'react';
import { marked } from 'marked';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';


function Previewer({ markdown }, ref) {

    const rawInput = marked(markdown);
    const cleanInput = DOMPurify.sanitize(rawInput);

    const renderMarkdown = () => {
        console.log('DOMPurify: ' + DOMPurify.removed);
        return { __html: cleanInput }
    }
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