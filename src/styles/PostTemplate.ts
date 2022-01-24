import { css } from '@emotion/css';

export const subtitle = css`
  color: #cccccc;
  margin: 0;
`;

export const descContainer = css`
  margin-bottom: 20px;
`;

export const articleBodyContainer = css`
  .hljs {
    background-color: #fffdd1;
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 40px;
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  code {
    font-family: 'Menlo', monospace;
    border-radius: 5px;
    background-color: #ddd;
    color: red;
    padding: 3px;
    font-size: 14px;
    margin: 0;
  }

  pre code {
    font-family: 'Menlo', monospace;
    color: black;
    font-size: 14px;
    border-radius: 10px;
    line-height: 18px;
    padding: 20px;
  }

  font-size: 16px;
  line-height: 24px;

  img {
    max-width: 100%;
  }

  blockquote {
    background-color: #eee;
    border-radius: 10px;
    padding: 1px 20px;
  }
`;
