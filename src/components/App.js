import React from 'react';

const object = {
  a: 1,
  b: 2,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {object} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
