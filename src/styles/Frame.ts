import { css } from '@emotion/css';

export const topBarContainerStyle = css`
  padding: 10px 20px;
  height: 50px;
  width: calc(100% - 40px);
  background-color: #333333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const contentsContainerStyle = css`
  overflow-y: scroll;
  padding-bottom: 50px;
  min-height: calc(100vh - 150px);
`;

export const siteName = css`
  margin: 0;
  font-size: 30px;
  margin-left: 30px;
  color: #ffffff;
  font-family: 'Menlo', monospace;
  display: flex;
  flex-direction: row;
`;

export const siteNameBlinkingCursor = css`
  animation: blinker 1s linear infinite;
  background-color: white;
  width: 20px;
  margin-left: 6px;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const title = css`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const app = css`
  overflow: hidden;
  min-width: 375px;
`;

export const content = css`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

export const article = css``;

export const navStyle = css`
  margin-right: 20px;
`;

export const goToTop = css`
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 25px;
  height: 25px;
`;
