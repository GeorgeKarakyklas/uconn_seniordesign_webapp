import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(100px, auto);
`; 

export const ContactUs = () => (
  <GridWrapper>
    <h2>Contact Us</h2>
    <div>
        <img src = {"/images/placeholder.png"} alt = "face1"></img>
        <p>Charles Ira</p>
        <p>charles.ira@uconn.edu</p>
        <a href = "https://github.com/charlesira" rel = "noreferrer" target = "_blank">Github: charlesira</a> 
    </div>
    <div>
        <img src = {"/images/placeholder.png"} alt = "face2"></img>
        <p>Georgios Karakyklas</p>
        <p>georgios.karakyklas@uconn.edu</p>
        <a href = "https://github.com/GeorgeKarakyklas/" rel = "noreferrer" target = "_blank">Github: GeorgeKarakyklas</a> 
    </div>
    <div>
        <img src = {"/images/placeholder.png"} alt = "face3"></img>
        <p>Robin Lopez</p>
        <p>robin.lopez@uconn.edu</p>
        <a href = "https://github.com/charlesira" rel = "noreferrer" target = "_blank">Github: charlesira</a> 
    </div>
    <div>
        <img src = {"/images/placeholder.png"} alt = "face4"></img>
        <p>Jason Chau</p>
        <p>jason.chau@uconn.edu</p>
        <a href = "https://github.com/Jason-Chau" rel = "noreferrer" target = "_blank">Github: Jason-Chau</a> 
    </div>
    <div>
        <img src = {"/images/placeholder.png"} alt = "face5"></img>
        <p>Gaurav Manandhar</p>
        <p>gaurav.manandhar@uconn.edu</p>
        <a href = "https://github.com/gauravm1997" rel = "noreferrer" target = "_blank">Github: guaravm1997</a> 
    </div>
  </GridWrapper>
)