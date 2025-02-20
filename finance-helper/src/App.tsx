import React from 'react';
import './styles.css'

const App: React.FC = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with me
          </a>
        </header>
      </div>
    </div>
  );
};

export default App;