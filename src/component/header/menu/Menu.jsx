import React, {useState, useEffect} from 'react';
import {css} from 'emotion';
import {styles} from './styles';

let orderList

const Menu = (props) => {

  const [scoreList, setScoreList] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (props.resultList !== null) {
      orderList = Object.entries(props.resultList).sort((b, a) => a[1].score - b[1].score);
      setScoreList(
        Object.entries(orderList[0][1]).map((item) =>
          <div>{item[0]}的分數: {item[1].score}</div>
        )
      )
    }
  }, [props.resultList])

  useEffect(() => {
    scoreList !== null && setLoading(false)
  }, [scoreList])

  return (
    <div className={css(styles.container)}>
      {loading && <>載入排行榜中..請稍後</>}
      <div style={{marginTop:'2.5%'}}>
      {scoreList}
      </div>
    </div>
  )
}

export default Menu;