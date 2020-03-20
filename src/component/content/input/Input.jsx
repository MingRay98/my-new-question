import React from 'react';
import {styles} from './styles';

let name = ""

const Input = (props) => {

  const handleSubmit = (e) => {
    props.handleSubmit(name)
    e.preventDefault();
  }

  return (
    <div style={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div style={{display: 'flex'}}>
          <input type="text" placeholder="請輸入Your Name Plz" onChange={(e) => {name = e.target.value}} required />
          <button type="submit" className='btn btn-dark' >提交</button>
        </div>
      </form>
    </div >
  )
}

export default Input;