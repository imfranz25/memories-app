import React from 'react'
import { useSelector } from "react-redux";
import Post from "./Post/Post";

export default function Posts() {
  const post = useSelector((state) => state.post);
  console.log(post);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}