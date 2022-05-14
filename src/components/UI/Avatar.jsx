import React from "react";
import styled from "styled-components";

const Avatar = () => {
  return (
    <>
      <Avatar.Avatar>post</Avatar.Avatar>
    </>
  );
};

Avatar.Avatar = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
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

export { Avatar };
