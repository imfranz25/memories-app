import React from 'react'
import { useSelector } from "react-redux";
import post from "./Post/Post";

export default function Posts() {
  const post = useSelector((state) => state.post);
  console.log(post);
  return (
    !post
  )
}