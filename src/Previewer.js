import React from 'react';
import { marked } from 'marked';
import { connect } from 'react-redux';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';


function Previewer({ markdown }) {

    const renderMarkdown = () => {
        return { __html: marked(markdown) }
    }
    return (
        <div className="panel">
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

export default connect(mapStateToProps)(Previewer);