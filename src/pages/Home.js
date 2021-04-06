import React from 'react';
import { Container, Grid } from '../styled/HomeStyled';

export const Home = (props) => (
  <Container>
    <Grid>
      <img src = {"/images/basketball.png"} alt = "ball"></img>
      <div>
        <p>Placeholder for the ZAP Widget.</p>
      </div>
      <div>
        <p>Placeholder for anything neccesary upon pressing a button.</p>
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