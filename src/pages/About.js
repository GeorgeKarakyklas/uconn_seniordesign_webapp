import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
`; 

export const About = () => (
  <GridWrapper>
    <h2>About The Project</h2>
    <div>
        <a href = "https://zap.org/home" rel = "noreferrer" target = "_blank">
            <img src = {"/images/zap_logo.jpeg"} alt = "zap" width = "700" height = "300"></img>
        </a>
        <a href = "https://seniordesign.engr.uconn.edu/" rel = "noreferrer" target = "_blank">
            <img src = {"/images/uconn_logo.jpg"} alt = "uconn"></img>
        </a>
    </div>
    <p>This is a Senior Design Project being in done in conjuction with the Zap Team from the NY Blockchain Center. Our aim is to help expand and prove the usability of the Zap protocol. </p>
  </GridWrapper>
)