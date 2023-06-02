import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MainContent(props) {
  const {theme, themeList, toggleTheme} = useContext(ThemeContext);
  return (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      padding: '1.5rem',
      // backgroundColor: theme === 'light' ? 'white' : 'black',
      // color: theme === 'light' ? 'black': 'white'
      backgroundColor: themeList[theme].background,
      color:  themeList[theme].foreground
      
    }}
  >
    <p>테마 변경이 가능한 웹사이트 입니다.</p>
    <button onClick={toggleTheme}>테마변경</button>
  </div>
  );
}

export default MainContent;