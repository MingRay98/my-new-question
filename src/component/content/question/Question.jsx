import React, {Component, useState, useContext, useEffect} from 'react';

const topic = {
  1: {
    title: '韓國瑜為什麼喜歡吃科學麵',
    ans: "3",
    option: ["因為很便宜", "因為很好吃", "因為有含粉", "因為裡面有暗黑版陳菊", "因為吃了可以發大財"]
  },
  2: {
    title: '吳彥祖平常上班都怎麼當薪水小倫',
    ans: "1",
    option: ["上班偷大BANG", "偷滑手機", "偷打LOL", "看油土伯", "怎麼可能會當薪水小倫"]
  },
  3: {
    title: '吳彥祖大一的體重是?',
    ans: "7",
    option: ["超過100", "95", "90", "85", "80", "75", '70']
  },
  4: {
    title: "吳彥祖前身是誰",
    ans: "3",
    option: ["九孔", '韓國瑜', "黃曉明", "黃登輝", "黃子蕉", '黃大謙', '孔鏘']
  },
  5: {
    title: '吳彥祖是資深什麼粉',
    ans: "5",
    option: ["含粉", "菸粉", "柯糞", "動粉", "統粉"]
  },
  6: {
    title: '吳彥祖會看下列哪個油土伯',
    ans: "5",
    option: ["重量級", "米砂", "孫安佐", "蔡哥", "那個抄襲女生kiki"]
  },
  7: {
    title: '吳彥祖手搖杯都點什麼',
    ans: "2",
    option: ["波多椰", "紅茶拿鐵加波霸", "波霸紅", "早餐點奶茶", "大杯咒"]
  },
  8: {
    title: '問答最大秘密時什麼',
    ans: "5",
    option: ["拉進來，打出去", "跟神明說不會再選市長", "超買不是走私", "兩岸一家親", "答錯的扣分，答對的加分"]
  },
  9: {
    title: '吳彥祖會想看下列哪一部電影',
    ans: "5",
    option: ["大尾盧曼2", "刺0", "雞排英雄", "環大西洋", "鬼陰驚(2013年真的有上映)"]
  },
  10: {
    title: '吳彥祖會想看下列哪一部電影2',
    ans: "5",
    option: ["大尾盧曼2", "刺0", "雞排英雄", "環大西洋", "鬼陰驚(2013年真的有上映)"]
  }
}

var topicIndex = 1;

export const Question = (props) => {


  let ansElement;

  const handleLabelStyle = (para) => {
    if (String(para) === question.ans) {
      if (correctAns === true) return {backgroundColor: 'green'}
      if (correctAns === false) return {backgroundColor: 'red'}
    }
  }

  const [question, setQuestion] = useState(topic[1])
  const [userAns, setUserAns] = useState('');
  const [correctAns, setCorrectAns] = useState(null)

  const title = question.title;
  const QA = question.option.map((title, index) =>
    <div>
      <input key={index} type="radio" name="question" value={index + 1}
        ref={(inputElement) => index + 1 === parseInt(userAns) && (ansElement = inputElement)}
        onChange={(e) => handleOnChange(e)} required />
      <label style={handleLabelStyle(index + 1)}>
        {title}
      </label>
    </div>
  )


  const handleOnChange = (e) => {
    setUserAns(e.target.value)
  }

  const handleSubmit = (e) => {

    if (userAns === question.ans) {
      setCorrectAns(true)
    } else {
      setCorrectAns(false)
    }
    e.preventDefault();
  }

  let handleNextBtn = () => {
    if(topicIndex !== 10){
    topicIndex = topicIndex + 1;
    setCorrectAns(null)
    setQuestion(topic[topicIndex])
    ansElement.checked = false;
    props.handleScore()
    } else{
      props.handleScore()
      props.handleFinish();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{title}</p>
        {QA}
        {correctAns === null && <input className='btn btn-primary' type="submit" value="Submit" />}
        {correctAns !== null && < button className='btn btn-dark' onClick={handleNextBtn} > Next</button>}
      </form>
    </>
  )

}