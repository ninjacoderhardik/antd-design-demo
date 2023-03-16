import React from "react";
import styled from "styled-components";
import Blogs from "./Blogs";
const styles = {
  backgroundColor: "#EDF7FA",
  width: "100vw",
  height: " calc(120vh - 70px)",
  position: "relative",
};
const H1 = styled.h1`
  padding-top: 30px;
  margin-left: 235px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  color: #21243d;
`;
const Blog = () => {
  return (
    <div style={styles}>
      <H1>Blog</H1>
        <Blogs/>
        <Blogs/>
        <Blogs/>
        <Blogs/>
    </div>
  );
};
export default Blog;
