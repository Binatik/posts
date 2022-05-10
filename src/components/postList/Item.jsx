import React from "react";
import styled from "styled-components";

import { Avatar } from "@cmp/UI/Avatar";

import { Article } from "./Article";

const Item = ({...props}) => {
  return (
    <>
      <Item.Item>
        <Avatar />
        <Article {...props} />
      </Item.Item>
    </>
  );
};

Item.Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
  padding: 15px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 7px;
`;

export { Item };
