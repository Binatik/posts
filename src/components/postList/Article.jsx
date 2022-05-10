import React from "react";
import styled from "styled-components";

const PostTitle = styled.h2`
  margin: 0 0 10px 0;

  ${props => props.theme.fontStyle.title};
`;

const Text = styled.p`
  ${props => props.theme.fontStyle.paragraph};
`;

const Article = ({title, body}) => {
  return (
    <>
      <Article.Article>
        <PostTitle>{title}</PostTitle>
        <Text>
          {body}
        </Text>
      </Article.Article>
    </>
  );
};

Article.Article = styled.article`
  flex: 1 1 90%;
  color: ${props => props.theme.colors.primary};
`;

export { Article };
