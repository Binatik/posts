import React from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const bounceCircle = props => keyframes`
	50%{
		background-color: ${props.theme.colors.secondary};
	}
`;

const Cricle = styled.div`
  background-color: ${props => props.theme.colors.surface};
  height: 12px;
  margin-left: 6px;
  width: 12px;
  border-radius: 8px;

  animation: ${bounceCircle} 2.24s infinite;
  animation-direction: normal;
`;

const CircleLeft = styled(Cricle)`
  animation-delay: 0.45s;
`;

const CircleCenter = styled(Cricle)`
  animation-delay: 1.05s;
`;

const CircleRight = styled(Cricle)`
  animation-delay: 1.35s;
`;

const Loader = () => {
  return (
    <>
      <Loader.Container>
          <CircleLeft></CircleLeft>
          <CircleCenter></CircleCenter>
          <CircleRight></CircleRight>
      </Loader.Container>
    </>
  );
};

Loader.Container = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 30px auto;
`

export { Loader };
