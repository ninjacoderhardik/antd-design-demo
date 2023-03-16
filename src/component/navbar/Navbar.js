import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const styles = {
  height: "70px",
  width: "100%",
  backgroundColor: " white",
  position: "fixed",
  top: "0",
  zIndex: "3",
};
export const Navbar = () => {
  const Div = styled.div`
    position: absolute;
    width: 106px;
    right: 160px;
    top: 27px;
    font-family: "Heebo";
    display: -ms-flexbox;
    display: flex;
    gap: 30px;
  `;
  const H1 = styled.h1`
  font-family: 'Heebo';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 29px;
text-align: right;
color: #000000;
text-decoration:none;
  `
  return (
    <div style={styles}>
      <Div>
        <Link to="/work">
          <H1>Works</H1>
        </Link>
        <Link to="/blog">
          <H1>Blog</H1>
        </Link>
        <Link to="/contact">
          <H1>Contact</H1>
        </Link>
      </Div>
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </div>
  );
};
