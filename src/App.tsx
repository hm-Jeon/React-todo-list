import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

// styled-components의 createGlobalStyle을 사용해 전역에 적용될 스타일을 지정할 수 있다.
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  // <Fragment>는 유령 컴포넌트이다. 여러 개의 컴포넌트를 return하고 싶을 때 <div> 대신 사용하면 좋다.
  // <>로 축약하여 선언할 수 있다.
  // 부모 엘리먼트 없이 여러 개의 컴포넌트를 return할 수 있다.
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
