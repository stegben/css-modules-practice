import React, { Component } from 'react';
import style from './TitleB.css';

class TitleB extends Component {
  render() {
    return (
      <div className={style.title}>
        {this.props.content}
      </div>
    );
  }
}

export default TitleB;
