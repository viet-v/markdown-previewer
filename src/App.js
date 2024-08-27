import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('');

  const updateMarkdown = (newText) => {
    setMarkdown(newText)
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="Panels">
          <Editor onTextChange={updateMarkdown} />
          <div id="resize-bar"></div>
          <Previewer markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
