import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDebounce } from "@src/hooks/useDebounce";

import { Avatar } from "@cmp/UI/Avatar";

import { Article } from "./Article";

const Item = ({ ...props }) => {
  const [cordinate, setCordinate] = useState({
    x: null,
    y: null,
    startX: null,
    elementX: null,
    direction: null,
  });

  function postTouchStart(event) {
    const touch = event.touches[0];
    const cordinateStartX = touch.pageX - event.target.getBoundingClientRect().x;

    const clientX = touch.clientX;
    const clientY = touch.clientY;
    setCordinate({ ...cordinate, x: clientX, y: clientY, startX: cordinateStartX });
  }

  function postTouchMove(event) {
    const touch = event.touches[0];

    const clientX = touch.clientX;
    const clientY = touch.clientY;
    const cordinateElement = touch.pageX - cordinate.startX;

    const difference = {
      differenceX: clientX - cordinate.x,
      differenceY: clientY - cordinate.y,
    };

    const { differenceX, differenceY } = difference;

    if (Math.abs(differenceX) > Math.abs(differenceY)) {
      const textDirection = differenceX > 0 ? "right" : "left";

      setCordinate({ ...cordinate, elementX: cordinateElement, direction: textDirection });
    }
  }

  const touchMove = useDebounce(postTouchMove, 7);

  return (
    <>
      <Item.Item style={{ transform: `translateX(${cordinate.elementX}px)` }} onTouchMove={touchMove} onTouchStart={postTouchStart}>
        <Avatar />
        <Article {...props} />
      </Item.Item>
    </>
  );
};

Item.Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 30px 0;
  padding: 15px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 7px;
  transition: 0.1s;
`;

export { Item };
