import React, { useState, useEffect } from "react";

import { postService } from "@src/pen/API/postService";

import { PostList } from "@cmp/postList/PostList";
import { Loader } from "@cmp/UI/Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

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
      {isPostsLoading ? <Loader /> : <PostList posts={posts} />}
    </>
  );
};

export { Posts };
