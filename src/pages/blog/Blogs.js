import React from 'react'
import styled from "styled-components";
const styles = {
    display:"inline-block"
}
const H3 = styled.h3`
padding-top:30px;
margin-left: 235px;
font-family: 'Heebo';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 44px;
color: #21243D;
`
const Div = styled.div`
margin-left:235px;
margin-top:10px;
`
const P = styled.p`
margin-left:235px;
`
const Hr = styled.hr`
  width: 650px;
  margin-left: 235px;
  border: 1px solid #e0e0e0;
  margin-top: 15px;
  border: 1px solid #e0e0e0;
`;
const Blogs = () => {
  return (
    <div style={styles}>
    <H3>UI Interactions of the week</H3> 
    <Div className="allcontent">
      <h2 className="haddingdate">12 Feb 2019</h2>
      <span className="pi">|</span>
      <h2 className="haddingdate">Express, Handlebars</h2>
      </Div>
      <P className="cardparagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br/> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</P>
      <Hr />
    </div>
  )
}
export default Blogs
