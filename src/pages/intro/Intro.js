import React, { useState, useEffect } from "react";
import backthird from "../../assets/backthird.png";
import backsecond from "../../assets/backsecond.png";
import backfirst from "../../assets/backfirst.png";
import "./intro.css";
import styled from "styled-components";
const styles = {
  display: "flex",
  marginTop: "25px",
  gap: "35px",
};
const styless = {
  display: "inline-block",
};
const Container = styled.div`
  width: 100vw;
  height: calc(113vh - 70px);
  position: relative;
  background-color: white;
`;
const H4 = styled.h5`
  margin-left: 100px;
  top: 1006px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 60px;
  color: #21243d;
`;
const Img = styled.img`
  margin-left: 100px;
`;
const H1 = styled.h1`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: #21243d;
  margin-top: -12px;
`;
const Hr = styled.hr`
  width: 858px;
  margin-left: 35px;
  border: 1px solid #e0e0e0;
  margin-left: 100px;
  margin-top: 15px;
  border: 1px solid #e0e0e0;
`;
const Intro = (props) => {
  return (
    <Container>
      <H4>{props.name}</H4>
      <div style={styles}>
        <Img src={backthird} />
        <div style={styless}>
          <H1>Designing Dashboards</H1>
          <div className="content-center">
            <div className="sagar">
              <h1 className="pako">2020</h1>
            </div>
            <h1 className="dashboard">Dashboard</h1>
          </div>
          <p className="imgpara">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
            <br /> officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt <br /> nostrud amet.
          </p>
        </div>
      </div>
      <Hr />
      <div style={styles}>
        <Img src={backsecond} />
        <div style={styless}>
          <H1>Vibrant Portraits of 2020</H1>
          <div className="content-center">
            <div className="sagar">
              <h1 className="pako">2019</h1>
            </div>
            <h1 className="dashboard">Illustration</h1>
          </div>
          <p className="imgpara">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
            <br /> officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt <br /> nostrud amet.
          </p>
        </div>
      </div>
      <Hr />
      <div style={styles}>
        <Img src={backfirst} />
        <div style={styless}>
          <H1>36 Days of Malayalam type</H1>
          <div className="content-center">
            <div className="sagar">
              <h1 className="pako">2018</h1>
            </div>
            <h1 className="dashboard">Typography</h1>
          </div>
          <p className="imgpara">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
            <br /> officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt <br /> nostrud amet.
          </p>
        </div>
      </div>
      <Hr />
    </Container>
  );
};
export default Intro;
