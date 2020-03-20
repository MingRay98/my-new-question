import React, {Component} from 'react';
import {css} from 'emotion';
import {styles} from './styles';
import Input from './input/Input'
import Question from './question/Question'
import {Outcome} from './outcome/Outcome'



const initialState = {
  name: '',
  score: 0,
  haveName: false,
  finish: false,
  menuOpen: false,
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.incorrectQuestion = [];
  }

  setName = (input) => {
    this.setState((ps) => ({...ps, name: input, haveName: true}))
  }

  setScore = () => {
    const {score} = this.state
    this.setState((ps) => ({...ps, score: score + 10}))
  }

  setFinsih = () => {
    this.setState((ps) => ({...ps, finish: true}))
  }

  setIncorrectQuestion = (title, option) => {
    this.incorrectQuestion.push({[title]: option})
  }

  render() {
    const {haveName, finish, name, score} = this.state;
    const {resultList} = this.props;
    return (
      <div className={css(styles.container)}>
        <div id='innerContainer' style={styles.innerContainer}>
          {!haveName && <Input handleSubmit={this.setName} />}
          {haveName && !finish && <Question handleScore={this.setScore} handleFinish={this.setFinsih} handleError={this.setIncorrectQuestion} />}
          {finish && <Outcome name={name} score={score} incorrectQuestion={this.incorrectQuestion} resultList={resultList} />}
        </div>
      </div>
    );
  }
}

export default Content;