/** @jsx jsx */
import { List } from '@mui/material';
import { css, jsx } from '@emotion/react';
import { Theme } from '@emotion/react';

const listStyle = (theme: Theme) => css`
  padding: 11px 13px;
  background-color: ${theme.colors.globalBackground};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  height: 30px;
  /* font-weight: bold; */
`;

const DrawerList = ({ children, ...props }) => {
  return (
    <List css={listStyle} {...props}>
      {children}
    </List>
  );
};

export default DrawerList;
