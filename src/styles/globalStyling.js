import { createGlobalStyle, css } from "styled-components";
import styled from "styled-components";
const FontFamily = css`
  @font-face {
    font-family: "Inter", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");
  }
`;

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');


*{
  font-family: 'Inter',  sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --color-primary: #27ae60;
  --color-primary50: #93d7af;
  --color-secondary: #eb5757;

  --gray-100: #333;
  --gray-50: #828282;
  --gray-20: #e0e0e0;
  --gray-0: #f5f5f5;

  --negative: #e60000;
  --warning: #ffcd07;
  --sucess: #168821;
  --information: #155bcb;

  --heading-weight: Bold;
  --headline-weight: Normal;

  --heading1-size: 26px;
  --heading2-size: 22px;
  --heading3-size: 18px;
  --heading4-size: 14px;
  --headline-size: 16px;
  --body-size: 14px;
  --caption-size: 12px;

  --base-radius: 8px;
}

`;

export const MainContainer = styled.div`
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  display: flex;
  overflow-y: hidden;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    gap: 30px;
  }
`;

export default globalStyles;
