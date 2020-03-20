import React, {useState, useEffect} from 'react';
import {css} from 'emotion';
import {styles} from './styles';

const Menu = (props) => {

  const [scoreList, setScoreList] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (props.resultList !== null)
      setScoreList(
        props.resultList.map((people) =>
          Object.entries(people).map((item) =>
            <div>{item[0]}的分數: {item[1].score}</div>
          ))
      )
  }, [props.resultList])

  useEffect(() => {
    scoreList !== null && setLoading(false)
  }, [scoreList])

  return (
    <div className={css(styles.container)}>
      {loading && <>載入排行榜中..請稍後</>}
      {scoreList}
    </div>
  )

}

export default Menu;