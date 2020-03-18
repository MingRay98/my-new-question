import React, {Component} from 'react';

export const Outcome = (props) => {
  return (
    <>
      {props.name} 得分為: {props.score}
      <div>結束</div>
    </>
  )
}