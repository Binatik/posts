import React, { useState, useEffect } from "react";

import { postService } from "@src/pen/API/postService";

import { PostList } from "@cmp/postList/PostList";
import { Loader } from "@cmp/UI/Loader";
import { Modal } from "@cmp/UI/Modal";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  async function fethPosts() {
    setIsPostsLoading(true);
    const posts = await postService.getPosts(10);
    setPosts(posts);
    setIsPostsLoading(false);
  }

  useEffect(() => {
    fethPosts();
  }, []);

  return (
    <>
      <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
        111
      </Modal>
      {isPostsLoading ? <Loader /> : <PostList posts={posts} />}
    </>
  );
};

export { Posts };
