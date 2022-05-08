import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const Title = styled.h2`

${props => props.theme.fontStyle.title};
`;

const Started = () => {
  return (
    <>
      <Container>
        <Title>Дополнительная страница.</Title>
      </Container>
    </>
  );
};

export { Started };
