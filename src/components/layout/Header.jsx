import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Container } from "@src/store/styled/styleComponents";

import { Burger } from "@cmp/UI/Burger";

const LogoLink = styled(NavLink)`
  margin: 0 50px 0 0;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  text-transform: uppercase;

  ${props => props.theme.fontStyle.links};
`;

const Navigation = styled.nav`
  border-bottom: 1px solid ${props => props.theme.colors.surface};
  flex: 1 1 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  margin: 0 30px 0 0;

  &:last-child {
    margin: 0;
  }
`;

const Link = styled(NavLink)`
  display: inline-block;
  margin: 0 0 10px 0;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.1s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.backgrounds[0]};
    transition: width 0.2s;
  }

  &:hover {
    color: ${props => props.theme.colors.backgrounds[0]};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }

  &.active::before {
    width: 100%;
  }

  ${props => props.theme.fontStyle.links};
`;

const Header = ({ ...props }) => {
  return (
    <>
      <Header.Header>
        <Header.Body>
          <LogoLink {...props} to="/">
            Posts
          </LogoLink>
          <Navigation>
            <List>
              <Item>
                <Link {...props} to="/">
                  Главная
                </Link>
              </Item>
              <Item>
                <Link {...props} to="started">
                  Дополнительная
                </Link>
              </Item>
            </List>
          </Navigation>
          <Burger />
        </Header.Body>
      </Header.Header>
    </>
  );
};

Header.Header = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding: 20px 0;
  background-color: ${props => props.theme.colors.background};
`;

Header.Body = styled(Container)`
  display: flex;
  align-items: center;
`;

export { Header };
