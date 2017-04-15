import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleA from './TitleA';
import TitleB from './TitleB';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      primary: true,
      number: 10,
    };
  }

  changePrimary() {
    const { primary, number } = this.state;
    this.setState({
      primary: !primary,
      number: (number + 100),
    });
  }

  render() {
    const { number, primary } = this.state;
    return (
      <div>
        <button onClick={this.changePrimary.bind(this)}></button>
        <TitleA content="Hello" />
        <TitleB primary={primary} number={number}>Worlds</TitleB>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
