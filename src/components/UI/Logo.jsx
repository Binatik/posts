import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoLink = styled(NavLink)`
  margin: 0 50px 0 0;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  text-transform: uppercase;

  ${props => props.theme.fontStyle.links};
`;

const Logo = () => {
  return (
    <>
      <LogoLink to="/">Posts</LogoLink>
    </>
  );
};

export { Logo };
