import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  margin: 10px 0;
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

const ListItems = ({ items }) => {
  return (
    <>
      <List>
        {items.map(({ path, title }) => (
          <Item key={path}>
            <Link to={path}>{title}</Link>
          </Item>
        ))}
      </List>
    </>
  );
};

export { ListItems };
