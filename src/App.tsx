import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleProvider } from './SampleContext';
import ReducerSample from './ReducerSample';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
      <CounterContainer />
      <TodoApp />
    </div>
  );
}

export default App;
