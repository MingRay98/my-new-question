import React, {useState, useEffect, Component} from 'react';
import Header from './component/header/Header';
import {css} from 'emotion';
import {styles} from './App.js'
import Content from './component/content/Content';
import {signOut, sign, getData} from './api/api'

const App = (props) => {

  const [height, setHeight] = useState(window.innerHeight)
  const [resultList, setList] = useState(null)

  useEffect(() => {
    sign();
    getData().then((data) => setList(data))
    return (() => signOut())
  }, [])

  window.addEventListener('resize', () => {
    setHeight(window.innerHeight)
  });

  return (
    <div id="mainContainer" className={css(styles.container)} style={{height: height + 'px'}} >
      <Header resultList={resultList} />
      <Content resultList={resultList} />
    </div>
  );
}

export default App;
