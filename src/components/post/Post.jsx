import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
  padding: 15px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 7px;
`;

const Article = styled.article`
  flex: 1 1 90%;
  color: ${props => props.theme.colors.primary};
`;

const Avatar = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px 15px 0;
  width: 70px;
  height: 70px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.default};
  border-radius: 50%;
  flex-shrink: 0;

  ${props => props.theme.fontStyle.title};

  @media ${props => props.theme.desktopFirst.tablet} {
    display: none;
  }
`;

const PostTitle = styled.h2`
  margin: 0 0 10px 0;

  ${props => props.theme.fontStyle.title};
`;

const Text = styled.p`
  ${props => props.theme.fontStyle.paragraph};
`;

const Post = () => {
  return (
    <>
      <section>
        <Container>
          <Item>
            <Avatar>post</Avatar>
            <Article>
              <PostTitle>Название поста</PostTitle>
              <Text>
                Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. Разнообразный и
                богатый опыт консультация с широким активом обеспечивает широкому кругу. Равным образом рамки и место обучения кадров влечет за собой
                процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а
                также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи!
                сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
              </Text>
            </Article>
          </Item>
          <Item>
            <Avatar>post</Avatar>
            <Article>
              <PostTitle>Название поста</PostTitle>
              <Text>
                Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. Разнообразный и
                богатый опыт консультация с широким активом обеспечивает широкому кругу. Равным образом рамки и место обучения кадров влечет за собой
                процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а
                также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи!
                сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
              </Text>
            </Article>
          </Item>
          <Item>
            <Avatar>post</Avatar>
            <Article>
              <PostTitle>Название поста</PostTitle>
              <Text>
                Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. Разнообразный и
                богатый опыт консультация с широким активом обеспечивает широкому кругу. Равным образом рамки и место обучения кадров влечет за собой
                процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а
                также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Товарищи!
                сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
              </Text>
            </Article>
          </Item>
        </Container>
      </section>
    </>
  );
};

export { Post };
