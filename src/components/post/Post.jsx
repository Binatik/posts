import React from "react";

import { Container } from "@src/store/styled/styleComponents";

import { Item } from "./Item";

const Post = () => {
  return (
    <>
      <section>
        <Container>
          <Item />
        </Container>
      </section>
    </>
  );
};

export { Post };
