import React, {Component, useState, useContext, useEffect} from 'react';
import topic from './topic';
import {css} from 'emotion';
import {styles} from './styles';

const initialState = {
  question: topic[1],
  userAns: '',
  correctAns: null
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.topicIndex = 1;
    this.ansElement = null;
  }

  handleOnChange = (e) => {
    const ans = e.target.value
    this.setState((ps) => ({...ps, userAns: ans}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {userAns, question} = this.state;
    if (userAns === question.ans) {
      this.setState((ps) => ({...ps, correctAns: true}))
    } else {
      this.setState((ps) => ({...ps, correctAns: false}))
      this.props.handleError(question.title, this.ansElement.parentNode.children[1].innerHTML)
    }
  }

  handleLabelStyle = (para) => {
    const {question, correctAns} = this.state
    if (String(para) === question.ans) {
      if (correctAns === true) return {backgroundColor: 'green'}
      if (correctAns === false) return {backgroundColor: 'red'}
    }
  }

  handleNextBtn = () => {
    const {question, userAns} = this.state
    if (this.topicIndex !== 10) {
      this.topicIndex = this.topicIndex + 1;
      this.setState((ps) => ({...ps, correctAns: null}))
      this.setState((ps) => ({...ps, question: topic[this.topicIndex]}))
      this.ansElement.checked = false;
      userAns === question.ans && this.props.handleScore()
    } else {
      userAns === question.ans && this.props.handleScore()
      this.props.handleFinish();
    }
  }

  render() {

    const {question, userAns, correctAns} = this.state;
    const title = question.title;
    const QA = question.option.map((title, index) =>
      <div>
        <input key={index} type="radio" name="question" value={index + 1} className={css(styles.radioButton)}
          ref={(inputElement) => index + 1 === parseInt(userAns) && (this.ansElement = inputElement)}
          onChange={(e) => this.handleOnChange(e)} required disabled={correctAns === null ? false : true} />
        <label className={css(styles.inputLabel)} style={this.handleLabelStyle(index + 1)}>
          {title}
        </label>
      </div>
    )

    return (
      <form className={css(styles.container)} onSubmit={this.handleSubmit}>
        <p className={css(styles.title)}>{title}</p>
        {QA}
        {correctAns === null && <input className='btn btn-dark' style={styles.submitBtn} type="submit" value="提交" />}
        {correctAns !== null && < button className='btn btn-dark' style={styles.submitBtn} onClick={this.handleNextBtn} >下一題</button>}
      </form>
    );
  }
}

export default Question;