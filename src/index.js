import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/main';
import Atomic from 'AtomicComponents';

class App extends Component {
  render() {
    return (
      <div>
        Welcome to Kanwaljeet's React Config
        <Atomic.Paragraph text="paragraph component text" />
        <Atomic.Label label="Label component" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
