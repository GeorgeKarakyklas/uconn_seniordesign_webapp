import React from 'react';
import { Container, Grid } from '../styled/HomeStyled';
import { getWeb3, getBalance } from "../Web3.js"

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
      <div>
        <p>DESCRIPTION OF ORACLE</p>
      </div>
    </Grid>
    <br></br>
    <h2>Any neccesary buttons will share a column here.</h2>
    <br></br>
    <h2>Oracle-Query-Response will be displayed in this column.</h2>
  </Container>
)