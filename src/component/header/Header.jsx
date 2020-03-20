import React, {Component} from 'react';
import {css} from 'emotion';
import {stlyes} from './styles';
import Menu from './menu/Menu';

const initialState = {
  menuOpen: false,
  changeLanguage: false,
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  setMenuOpen = () => {
    const {menuOpen} = this.state;
    !menuOpen && this.setState((ps) => ({...ps, menuOpen: true}))
    menuOpen && this.setState((ps) => ({...ps, menuOpen: false}))
  }

  setChangeLanguage = () => {
    const {changeLanguage} = this.state;
    !changeLanguage && this.setState((ps) => ({...ps, changeLanguage: true}))
    changeLanguage && this.setState((ps) => ({...ps, changeLanguage: false}))
  }

  render() {
    const {resultList} = this.props;
    const {menuOpen, changeLanguage} = this.state
    return (
      <>
        <div className={css(stlyes.container)}>
          <div className={css(stlyes.container.icon)} onClick={this.setMenuOpen}>☰</div>
          <div className={css(stlyes.container.icon)}>{changeLanguage ? 'How Mochi with Tom Cruise' : "你跟吳彥祖的麻吉度"} </div>
          <div className={css(stlyes.container.icon)} onClick={this.setChangeLanguage}>🌐</div>
        </div>
        {menuOpen && <Menu resultList={resultList} />}
      </>
    );
  }
}

export default Header;