import React, {Component, useState} from 'react';
import {styles} from './styles';

const Input = (props) => {
  const [name, setName] = useState('');
  return (
    <div style={styles.containters}>
      <input type="text" placeholder="請輸入Your Name Plz" onChange={(e) => {setName(e.target.value)}} />
      <button className='btn btn-dark' onClick={() => props.handleSubmit(name)}>提交</button>
    </div>
  )
}

export default Input;