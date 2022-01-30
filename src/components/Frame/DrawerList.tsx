/** @jsx jsx */
import { List } from '@mui/material';
import { css, jsx } from '@emotion/react';
import { Theme } from '@emotion/react';

const listStyle = (theme: Theme) => css`
  padding: 8px 10px;
  background-color: ${theme.colors.globalBackground};
`;

const DrawerList = ({ children, ...props }) => {
  return (
    <List css={listStyle} {...props}>
      {children}
    </List>
  );
};

export default DrawerList;
