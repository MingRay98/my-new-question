import React, {Component, useState, useContext, useEffect} from 'react';
import topic from './topic';


let topicIndex = 1;
let ansElement;

export const Question = (props) => {



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
    if (topicIndex !== 10) {
      topicIndex = topicIndex + 1;
      setCorrectAns(null)
      setQuestion(topic[topicIndex])
      ansElement.checked = false;
      userAns === question.ans && props.handleScore()
    } else {
      userAns === question.ans && props.handleScore()
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