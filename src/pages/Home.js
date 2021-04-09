import React from 'react';
import { Container, ImageCombination, Title, Text } from '../styled/HomeStyled';

export const Home = () => (
  <Container>
    <Title>UCONN SENIOR DESIGN PROJECT SUMMARY</Title>
    <ImageCombination>
      <a href = "https://seniordesign.engr.uconn.edu/" rel = "noreferrer" target = "_blank">
          <img src = {"/images/uconn_logo.jpg"} alt = "uconn" width = "600" height = "180"></img>
      </a>
      <p>x</p>
      <a href = "https://zap.org/home" rel = "noreferrer" target = "_blank">
        <img src = {"/images/zap_logo.jpeg"} alt = "zap" width = "600" height = "300"></img>
      </a>
    </ImageCombination>
    <Text>In the context of blockchains, the oracle problem is loosely defined as the security, authenticity, and trust conflict between third-party oracles and the trustless execution of smart contracts. The Zap Protocol, a project sponsored by the New York Blockchain Center and the Synapse Foundation, aims to solve this by democratizing the oracle creation process. This encourages a robust marketplace, wherein data providers and other decentralized services compete with each other. Our project was split into multiple phases. The first was a learning phase, where we learned the terminology of the blockchain space and became familiar with some of the technologies used by developers. The second phase entailed academic research on the oracle problem. Through our research, we helped develop novel ideas for possible solutions to the oracle problem. This in turn informed the Zap team of potential design changes to their protocol. The third phase consisted of helping to drive open-source development in several programming languages. By expanding their codebase from JavaScript to other popular languages such as Python and Java, more developers from a wider range of disciplines could participate in the Zap ecosystem. The final phase involved implementing our own oracle that serves to end users the latest basketball scores and relevant statistics from all major American basketball leagues, both at the college and professional level. We also built an accompanying web application, and thoroughly documented the process to serve as a model for future users of the Zap platform.</Text>
  </Container>
)