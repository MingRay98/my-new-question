import React, {Component, useEffect} from 'react';
import {css} from 'emotion';
import {styles} from './styles';
import {creatData} from '../../../api/api'

let index = 0

export const Outcome = (props) => {

  useEffect(() => {
    index += 1;
    console.log('useEffect trigger count: ' + index)
    console.log(`name: ${props.name} score: ${props.score}`)
    creatData(props.name, props.score)
  })

  const level = () => {
    let compliment = null;
    props.score === 100 && compliment === null && (compliment = '太神拉!簡直不敢相信，你是我的麻吉!')
    props.score >= 80 && compliment === null && (compliment = '有麻吉到喔~兄day~')
    props.score >= 60 && compliment === null && (compliment = '稍微有對到我的腦電BO')
    props.score >= 40 && compliment === null && (compliment = '兄day~這樣不行喔')
    props.score < 40 && compliment === null && (compliment = '菜逼8~多跟我聊天好嗎?')
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