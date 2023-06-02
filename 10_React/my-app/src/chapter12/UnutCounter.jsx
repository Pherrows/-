import React, { useState } from 'react';

function UnutCounter(props) {
  const {length, onLengthChange} = props;

  return (
    <>

      <button type='button' onClick={() => onLengthChange(Math.max(length - 1, 0))}>-</button>
      {length}
      <button type='button' onClick={() => onLengthChange(length + 1)}>+</button>
      
    </>
  );
}

export default UnutCounter;