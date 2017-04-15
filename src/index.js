import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleA from './TitleA';
import TitleB from './TitleB';


class App extends Component {
  render() {
    return (
      <div>
        <TitleA content="Hello" />
        <TitleB content="World" />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
