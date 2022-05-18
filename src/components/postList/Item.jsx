import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDebounce } from "@src/hooks/useDebounce";

import { Avatar } from "@cmp/UI/Avatar";

import { Article } from "./Article";

const Item = ({ ...props }) => {
  const [cordinateDirection, setCordinateDirection] = useState({
    x: null,
    y: null,
    direction: null,
  });

  const [rectPosition, setRectPosition] = useState({
    rect: 0,
    position: 0,
  });

  function getDirection(currentClientX, currentClientY) {
    const differenceX = currentClientX - cordinateDirection.x;
    const differenceY = currentClientY - cordinateDirection.y;

    if (Math.abs(differenceX) > Math.abs(differenceY)) {
      const textDirection = differenceX > 0 ? "right" : "left";
      setCordinateDirection({ ...cordinateDirection, direction: textDirection });
    }
  }

  function postMouseStart(mouseEvent) {
    const clientX = mouseEvent.clientX;
    const clientY = mouseEvent.clientY;

    const rect = mouseEvent.target.getBoundingClientRect();
    const rectX = clientX - rect.x;

    setCordinateDirection({ ...cordinateDirection, x: clientX, y: clientY });

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp);

    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(event) {
      const clientX = event.clientX;
      const clientY = event.clientY;

      const element = clientX - rectX;

      setRectPosition({ ...rectPosition, position: element });
      getDirection(clientX, clientY);
    }
  }

  function postTouchStart(event) {
    const touch = event.touches[0];
    const rect = event.target.getBoundingClientRect();

    const clientX = touch.clientX;
    const clientY = touch.clientY;

    const rectX = clientX - rect.x;

    setCordinateDirection({ ...cordinateDirection, x: clientX, y: clientY });
    setRectPosition({ ...rectPosition, rect: rectX });
  }

  function postTouchMove(event) {
    const touch = event.touches[0];

    const clientX = touch.clientX;
    const clientY = touch.clientY;

    const element = clientX - rectPosition.rect;

    setRectPosition({ ...rectPosition, position: element });
    getDirection(clientX, clientY);
  }

  const { position } = rectPosition;

  const mouseStart = useDebounce(postMouseStart, 5);
  const touchMove = useDebounce(postTouchMove, 5);
  return (
    <>
      <Item.Item
        style={{ transform: `translateX(${position}px)` }}
        onMouseDown={mouseStart}
        onTouchMove={touchMove}
        onTouchStart={postTouchStart}
      >
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
