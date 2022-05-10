import React from "react";

import { Container } from "@src/store/styled/styleComponents";

import { Item } from "./Item";

const PostList = ({ posts }) => {

  return (
    <>
      <section>
        <Container>
          {posts.map(({ id, title, body }) => (
            <Item key={id} title={title} body={body} />
          ))}
        </Container>
      </section>
    </>
  );
};

export { PostList };
