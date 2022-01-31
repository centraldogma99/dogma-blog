import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const searchInputContainer = css`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid gainsboro;
  width: 240px;
  margin-bottom: 13px;
  background-color: white;
`;

export const sharp = css`
  padding-left: 7px;
  padding-right: 4px;
  font-size: 20px;
  line-height: 30px;
`;

export const searchInput = css`
  flex: 1;
  min-width: 0;
  border: none;
  padding: 6px;
  font-size: 18px;
  &:focus {
    outline: none !important;
  }
`;

export const TagButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
