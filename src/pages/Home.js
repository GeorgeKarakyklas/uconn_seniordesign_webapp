import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '../styled/HomeStyled';
import { getWeb3, getBalance } from "../Web3.js"

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Home = (props) => (
  <Container>
    <Grid>
      <img src = {"/images/basketball.png"} alt = "ball"></img>
      <div>
        <p>Placeholder for the ZAP Widget.</p>
      </div>
      <div>
        <button onClick={getBalance}>Click to Make a Query </button>
      </div>
    </Grid>
    <br></br>
    <h2>Any neccesary buttons will share a column here.</h2>
    <br></br>
    <h2>Oracle-Query-Response will be displayed in this column.</h2>
  </Container>
)