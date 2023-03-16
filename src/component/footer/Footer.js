import React from "react";
import fb from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import vector from "../../assets/vector.png";
import styled from "styled-components";
const styles = {
  backgroundColor: "white",
  width: "100vw",
  height: " calc(25vh - 70px)",
  // position: "relative",
  display:"inline-block",
  justifyContent:"center"
};
const Ul = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0 1rem 0;
gap:25px;
`
const H3 = styled.h3`
font-family: 'Heebo';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;
color: #21243D;
`
const Footer = () => {
  return (
    <div style={styles}>
      <Ul className="socials">
      <li><img src={fb}/></li>
      <li><img src={linkedin}/></li>
      <li><img src={twitter}/></li>
      <li><img src={vector}/></li>
      </Ul>
      <H3>Copyright ©2020 All rights reserved</H3>
      </div>
  );
};
export default Footer;

