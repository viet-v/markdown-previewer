import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="Panels">
          <Editor />
          <div id="resize-bar"></div>
          <Previewer />
      </div>
    </div>
  );
}

export default App;
