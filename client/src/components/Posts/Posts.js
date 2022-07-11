import React from 'react'
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material/"
import Post from "./Post/Post";
import "./Posts.scss";

export default function Posts() {
  const posts = useSelector((state) => state.post);
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid 
        className="main-container" 
        container 
        alignItems="stretch" 
        spacing={3}
      >
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  )
}