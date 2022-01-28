/** @jsx jsx */
import { css, jsx, Theme } from '@emotion/react';
import { Link } from 'gatsby';
import TagBtn from './TagBtn';
import { TagButtonsContainer } from '../styles/tags';

const containerStyle = (theme: Theme) => css`
  padding: 20px;
  padding-top: 12px;
  margin-bottom: 20px;
  background-color: ${theme.colors.postListBackground};
  cursor: pointer;
`;

const titleStyle = (theme: Theme) => css`
  margin: 0;
  color: ${theme.colors.postList};
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 650;
`;

const dateStyle = (theme: Theme) => css`
  margin: 0;
  color: ${theme.colors.postListDate};
  font-size: 15px;
`;

const PostListItem = (props: {
  title: string;
  date: string;
  linkTo: string;
  tags?: string[];
}) => {
  return (
    <div
      css={css`
        margin-bottom: 30px;
      `}
    >
      <TagButtonsContainer>
        {props.tags?.map(tag => (
          <TagBtn tag={tag} key={tag} />
        ))}
      </TagButtonsContainer>
      <Link
        to={props.linkTo}
        css={css`
          text-decoration: none;
        `}
      >
        <div css={containerStyle}>
          <p css={titleStyle}>{props.title}</p>
          <p css={dateStyle}>{props.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
