import React, { Component } from 'react';
import style from './TitleA.css';

class TitleA extends Component {
  render() {
    return (
      <div className={style.title}>
        {this.props.content}
      </div>
    );
  }
}

export default TitleA;
