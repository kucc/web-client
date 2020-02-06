import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'NanumSquare', sans-serif;
    font-display: 'block';
    box-sizing: border-box; /* 테두리를 기준으로 박스의 크기를 결정함 */
    -webkit-font-smoothing: antialiased; /* 폰트를 부드럽게 해줌 */
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    /* font-family: 'Roboto', sans-serif; */
    height: 100%;
    font-size: 10px;
    color : #707070;
    background-color: white;
    /* user-select : none; 드래그 못하게 하기 */
    margin: 0;
    display :flex;
    align-items : center;
    justify-content : center;
  }::-webkit-scrollbar { /* 스크롤바 제거 */
    display: none;
  }

  #__next {
    width : 136.6rem;
    height: 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
