import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { useThrottle } from '@src/hooks/useThrottle';

import { Avatar } from "@cmp/UI/Avatar";

import { Article } from "./Article";

const Item = ({ ...props }) => {
  const moveItemRef = useRef(null);

  const pointRef = useRef(0);

  const [position, setPosition] = useState({
    pointSave: 0,
    pointMove: 0,
    isListener: false,
  });

  const mouseMoveThrottle = useThrottle(mouseMove,35);

  function mouseMove(eventMove) {
    const point = eventMove.clientX - position.pointSave;
    console.log((pointRef.current = point));

    setPosition(prev => ({ ...prev, pointMove: point }));
  }

  function mouseUp() {
    setPosition({ ...position, isListener: false, pointMove: pointRef.current });
  }

  function mouseDown(eventDown) {
    const point = eventDown.clientX;

    setPosition(prev => ({ ...prev, pointSave: point, isListener: true }));
  }

  useEffect(() => {
    if (position.isListener === false) return;

    document.addEventListener("mousemove", mouseMoveThrottle);
    document.addEventListener("mouseup", mouseUp);

    return () => {
      document.removeEventListener("mousemove", mouseMoveThrottle);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [position.isListener]);

  return (
    <>
      <Item.Item style={{ transform: `translateX(${position.pointMove}px)` }} onMouseDown={mouseDown} ref={moveItemRef}>
        <Avatar />
        <Article {...props} />
      </Item.Item>
    </>
  );
};

Item.Item = styled.div`
  user-select: none;
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
