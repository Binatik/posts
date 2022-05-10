import React from "react";
import styled from "styled-components";

const PostTitle = styled.h2`
  margin: 0 0 10px 0;

  ${props => props.theme.fontStyle.title};
`;

const Text = styled.p`
  ${props => props.theme.fontStyle.paragraph};
`;

const Article = () => {
  return (
    <>
      <Article.Article>
        <PostTitle>Название поста</PostTitle>
        <Text>
          Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. Разнообразный и
          богатый опыт консультация с широким активом обеспечивает широкому кругу. Равным образом рамки и место обучения кадров влечет за собой
          процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также
          рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи! сложившаяся
          структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
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
