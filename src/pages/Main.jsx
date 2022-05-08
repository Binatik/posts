import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const Title = styled.h2`

${props => props.theme.fontStyle.title};
`;

const Main = () => {
  return (
    <>
      <Container>
        <Title>Главная страница - index</Title>
      </Container>
    </>
  );
};

export { Main };
