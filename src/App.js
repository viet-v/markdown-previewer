import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux-store';


function App() {
  const [markdown, setMarkdown] = useState('');

  const updateMarkdown = (newText) => {
    setMarkdown(newText)
  }

  return (
    <Provider store={store} >  
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Panels">
            <Editor onTextChange={updateMarkdown} />
            <div id="resize-bar"></div>
            <Previewer markdown={markdown} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
