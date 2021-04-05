import React from 'react';
import { Container, ImageCombination, Title } from '../styled/AboutStyled';

export const About = () => (
  <Container>
    <Title>PROJECT SUMMARY</Title>
    <ImageCombination>
      <a href = "https://seniordesign.engr.uconn.edu/" rel = "noreferrer" target = "_blank">
          <img src = {"/images/uconn_logo.jpg"} alt = "uconn"></img>
      </a>
      <a href = "https://zap.org/home" rel = "noreferrer" target = "_blank">
        <img src = {"/images/zap_logo.jpeg"} alt = "zap" width = "600" height = "300"></img>
      </a>
    </ImageCombination>
    <p>This is a Senior Design Project being done in conjuction with the Zap Team from the NY Blockchain Center. Our aim is to help expand and prove the usability of the Zap protocol. </p>
  </Container>
)