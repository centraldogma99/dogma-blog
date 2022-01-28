import { css } from '@emotion/react';
import { Theme } from '@emotion/react';

export const subtitle = css`
  color: #cccccc;
  margin: 0;
`;

export const descContainer = css`
  margin-bottom: 20px;
`;

export const articleBodyContainer = (theme: Theme) => css`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.text};

  .hljs {
    background-color: #fffdd1;
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 40px;
    color: ${theme.colors.primary};
  }

  h2 {
    margin-top: 55px;
    margin-bottom: 30px;
    color: ${theme.colors.primary};
  }

  h3 {
    margin-top: 35px;
    margin-bottom: 20px;
    color: ${theme.colors.primary};
  }

  h1 h2 h3 {
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

  img {
    max-width: 100%;
  }

  blockquote {
    background-color: #eee;
    border-radius: 10px;
    padding: 20px;
    margin-inline-start: 20px;
    margin-inline-end: 20px;

    > :first-child {
      margin-top: 0;
    }

    > h3:first-child {
      margin-bottom: 19px;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-size: 17px;
  }

  > :first-child {
    margin-top: 19px;
  }
`;
