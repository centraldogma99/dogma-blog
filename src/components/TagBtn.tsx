/** @jsx jsx */
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';

const btnStyle = css`
  border: 0;
  background-color: dodgerblue;
  color: white;
  padding: 3px 5px;
  margin-right: 7px;
  font-size: 13px;
  margin-bottom: 5px;
`;

const TagBtn = (props: { tag: string }) => {
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
