import React from "react";
import "./services.css";
import { Row } from "antd";
import styled from "styled-components";
import Card from "antd/lib/card";
export const Services = () => {
  const styles = {
    backgroundColor: "#EDF7FA",
    width: "100vw",
    height: " calc(60vh - 70px)",
    position: "relative",
  };
  const StyledCard = styled(Card)`
    color: red;
    background-color: #ffffff;
    width: 450px;
  `;
  return (
    <div style={styles} className="allcolor">
      <div className="allcenter">
        <h1 className="text">Recent posts</h1>
        <h1 className="alltext">view all</h1>
      </div>
        <Row className="allcards">
          <div className="justt">
      <StyledCard>
      <h1 className="cardhadding">Making a design system from scratch</h1>
      <div className="allcontent">
      <h2 className="haddingdate">12 Feb 2020</h2>
      <span className="pi">|</span>
      <h2 className="haddingdate">Design, Pattern</h2>
      </div>
      <h6 className="cardparagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h6>
      </StyledCard>
      </div>
      <StyledCard>
      <h1 className="cardhadding">Making a design system from scratch</h1>
      <div className="allcontent">
      <h2 className="haddingdate">12 Feb 2020</h2>
      <span className="pi">|</span>
      <h2 className="haddingdate">Figma, Icon Design</h2>
      </div>
      <h6 className="cardparagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h6>
      </StyledCard>
      </Row>
    </div>
  );
};
