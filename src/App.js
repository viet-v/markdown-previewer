import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import store from './redux-store';
import Editor from './Editor';
import Previewer from './Previewer';
import logo from './logo.svg';
import './App.css';


function App() {
  const [markdown, setMarkdown] = useState('');

  // const updateMarkdown = (newText) => {
  //   setMarkdown(newText)
  // }

  const [isResizing, setIsResizing] = useState(false);
  const leftPanelRef = useRef(null);
  const resizeBarRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (e) => {
      if (!isResizing) return;

      const newLeftWidth = e.clientX - resizeBarRef.current.offsetWidth / 2;
      const newRightWidth = window.innerWidth - newLeftWidth - 5;
      
      if (leftPanelRef.current) {
        leftPanelRef.current.style.flex = `0 0 ${newLeftWidth}px`;
        resizeBarRef.current.style.flex = `0 0 5px`;
        rightPanelRef.current.style.flex = `0 0 ${newRightWidth}px`;
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isResizing]);

  return (
    <Provider store={store} >  
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Panels">
            <Editor ref={leftPanelRef} />
            <div ref={resizeBarRef} id="resize-bar" onMouseDown={() => setIsResizing(true)}></div>
            <Previewer ref={rightPanelRef} markdown={markdown} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
