import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function GamePage(props) {

  const navimain = useNavigate()
  return (
    <div>
      <h1>게임 페이지</h1>
      <ul>
        <li>
          <Link to='/games/hot'>인기 게임</Link>
        </li>
        <li>
          <Link to='/games/new'>신규 게임</Link>
        </li>
      </ul>
      {/* Nested Route 의 자식 엘리먼트를 보여주는 역활 */}
      <Outlet />
      <button onClick={() => navimain('/')}>메인으로</button>
    </div>
  );
}

export default GamePage;