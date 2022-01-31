/** @jsx jsx */
import { Link } from 'gatsby';
import { css, jsx, useTheme } from '@emotion/react';

const TagBtn = (props: { tag: string }) => {
  const theme = useTheme();

  const btnStyle = css`
    border: 0;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    padding: 3px 5px;
    margin-right: 7px;
    font-size: 13px;
    margin-bottom: 5px;
    border-radius: 5px;

    &:hover {
      /* background-color: ${theme.colors.opposite}; */
      background-color: gray;
      color: white;
    }
  `;

  return (
    <Link
      to={`/tags/${props.tag}`}
      css={css`
        text-decoration: none;
      `}
    >
      <div css={btnStyle}>{`# ${props.tag}`}</div>
    </Link>
  );
};

export default TagBtn;
