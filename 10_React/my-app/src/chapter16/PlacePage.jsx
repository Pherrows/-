import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlacePage(props) {

  const navimain = useNavigate()
  return (
    <div>
      <h1>장소 페이지</h1>
      <button onClick={() => navimain('/')}>메인으로</button>
    </div>
  );
}

export default PlacePage;