import React from 'react'
import styled from "styled-components";
import Intro from '../intro/Intro';
const styles = {
    backgroundColor: "#EDF7FA",
    width: "100vw",
    height: " calc(100vh - 70px)",
    position: "relative",
  };
const Work = () => {
  return (
    <div style={styles}>
        <Intro name="work"/>
    </div>
  )
}
export default Work
