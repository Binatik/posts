import React, { useState } from "react";
import styled from "styled-components";

import { useDebounce } from "@src/hooks/useDebounce";

import { Avatar } from "@cmp/UI/Avatar";

import { Article } from "./Article";

const Item = ({ ...props }) => {
  const [cordinate, setCordinate] = useState({
    cordinateX: null,
    cordinateY: null,
    cordinateTouch: 0,
    direction: null,
  });

  function postTouchStart(event) {
    const touch = event.touches[0];

    const clientX = touch.clientX;
    const clientY = touch.clientY;

    setCordinate({ ...cordinate, cordinateX: clientX, cordinateY: clientY });
  }

  function postTouchMove(event) {
    const touch = event.touches[0];

    const clientX = touch.clientX;
    const clientY = touch.clientY;
    const cordinateTouchX = touch.pageX;

    const difference = {
      differenceX: clientX - cordinate.cordinateX,
      differenceY: clientY - cordinate.cordinateY,
    };

    const { differenceX, differenceY } = difference;

    if (Math.abs(differenceX) > Math.abs(differenceY)) {
      const text = differenceX > 0 ? "right" : "left";

      setCordinate({ ...cordinate, cordinateTouch: cordinateTouchX, direction: text });
    }
  }
  const touchMove = useDebounce(postTouchMove, 3);

  return (
    <>
      <Item.Item style={{transform: `translateX(${cordinate.cordinateTouch}px)`}} cordinate={cordinate} onTouchMove={touchMove} onTouchStart={postTouchStart}>
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
`;

export { Item };
