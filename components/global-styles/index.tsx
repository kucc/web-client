import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    font-family: 'NanumSquare', sans-serif;
    font-display: 'block';
    box-sizing: border-box; /* 테두리를 기준으로 박스의 크기를 결정함 */
    -webkit-font-smoothing: antialiased; /* 폰트를 부드럽게 해줌 */
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-family: 'NanumSquare', sans-serif;
    width : 100%;
    height: 100%;
    font-size: 10px;
    color : #707070;
    background-color: white;
    /* user-select : none; 드래그 못하게 하기 */
    margin: 0;
  }::-webkit-scrollbar { /* 스크롤바 제거 */
    display: none;
  }

  #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  input[type=password] {
    font-family: "Arial";
  }

  textarea:focus {
  outline: none;
  }
  
  button:focus {
    outline: none;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyles;
