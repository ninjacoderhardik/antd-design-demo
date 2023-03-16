import React from "react";
import scap from "../../assets/scap.png"
import car from "../../assets/car.png"
import flack from "../../assets/flack.png"
import styled from "styled-components";
import "./contact.css"
const styles = {
  backgroundColor: "white",
  width: "100vw",
  height: " calc(252vh - 70px)",
  position: "relative",
  display:"inline-block"
};
const H2 = styled.h2`
  margin-left: 235px;
  padding-top: 70px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;
  color: #21243d;
`;
const Div = styled.div`
  width: 62px;
  height: 25px;
  background: #ff7c7c;
  border-radius: 16px;
`;
const H3 = styled.h3`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 2px;
`;
const H4 = styled.h4`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
`;
const P = styled.p`
font-family: 'Heebo';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
margin-left:235px;
margin-top:20px;
`
const Img = styled.img`
margin-left:235px;
margin-top:15px;
`
const H6 = styled.h6`
margin-left: 235px;
margin-top: 15px;
font-family: 'Heebo';
font-style: normal;
font-weight: 500px;
font-size: 30px;
line-height: 60px;
color: #21243D;
`
const H1 = styled.h4`
font-family: 'Heebo';
font-style: normal;
font-weight: 400px;
font-size: 24px;
line-height: 60px;
color: #21243D;
margin-left: 235px;
margin-top: -20px;
`
const Contact = () => {
  return (
    <div style={styles}>
      <H2>
        Designing Dashboards with
        <br /> usability in mind
      </H2>
      <div className="want">
        <Div>
          <H3>2020</H3>
        </Div>
        <H4>Dashboard, User Experience Design</H4>
      </div>
      <P>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia<br/> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</P>
      <Img src={scap} />
      <H6>Heading 1</H6>
      <H1>Heading 2</H1>
      <P>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia<br/> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</P>
      <Img src={car}/>
      <Img src={flack}/>
    </div>
  );
};
export default Contact;
