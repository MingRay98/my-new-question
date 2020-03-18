import React, {Component} from 'react';
import {css} from 'emotion';
import {stlyes} from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={css(stlyes.container)}>
        <div className={css(stlyes.container.icon)}>☰</div>
        <div className={css(stlyes.container.icon)}>你跟吳彥祖的麻吉度 </div>
        <div className={css(stlyes.container.icon)}>🌐</div>
      </div>
    );
  }
}

export default Header;