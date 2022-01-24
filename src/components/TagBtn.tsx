import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/css';

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
      className={css`
        text-decoration: none;
      `}
    >
      <div className={btnStyle}>{`# ${props.tag}`}</div>
    </Link>
  );
};

export default TagBtn;
