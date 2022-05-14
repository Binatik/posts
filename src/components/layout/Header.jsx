import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

import { Burger } from "@cmp/UI/Burger";
import { Logo } from "@cmp/UI/Logo";
import { ListItems } from "@cmp/UI/ListItems";

const Navigation = styled.nav`
  border-bottom: 1px solid ${props => props.theme.colors.surface};
  flex: 1 1 100%;
`;

const Header = () => {
  const [items, setItems] = useState([
    {
      path: "/",
      title: "Главная",
    },
    {
      path: "/posts",
      title: "Посты",
    },
  ]);

  return (
    <>
      <Header.Header>
        <Header.Body>
          <Logo />
          <Navigation>
            <ListItems items={items} />
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
  z-index: 5;
`;

Header.Body = styled(Container)`
  display: flex;
  align-items: center;
`;

export { Header };
