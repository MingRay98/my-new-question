import React, {useState, useEffect} from 'react';
import Header from './component/header/Header';
import {css} from 'emotion';
import {styles} from './App.js'
import Content from './component/content/Content';


const App = (props) => {

  const [height, setHeight] = useState(window.innerHeight)
  useEffect(() => {
  }, [])

  window.addEventListener('resize', () => {
    setHeight(window.innerHeight)
  });

  return (
    <div id="mainContainer" className={css(styles.container)} style={{height: height + 'px'}} >
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
