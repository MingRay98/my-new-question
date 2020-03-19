import React, {Component, useEffect} from 'react';
import {css} from 'emotion';
import {styles} from './styles';

let index = 0

export const Outcome = (props) => {

  useEffect(() => {
    index += 1;
    console.log('useEffect trigger count: ' + index)
    console.log(`name: ${props.name} score: ${props.score}`)
  })

  const level = () => {
    let compliment = '';
    props.score === 100 && (compliment = '太神拉!簡直不敢相信，你是我的麻吉!')
    props.score >= 80 && (compliment = '有麻吉到喔~兄day~')
    props.score >= 60 && (compliment = '稍微有對到我的腦電BO')
    props.score >= 40 && (compliment = '兄day~這樣不行喔')
    props.score < 40 && (compliment = '菜逼8~多跟我聊天好嗎?')
    return compliment
  }

  return (
    <div className={css(styles.container)}>
      <label style={{fontWeight: 'bold'}}>"{props.name}"</label> 得分為: {props.score}
      <div>結束評語:
        <p style={{color: 'rgb(255, 33, 44)'}}>{level()}</p>
      </div>
    </div>
  )
}