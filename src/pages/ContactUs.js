import React from 'react';
import { Person, Container, Title, PersonGrid } from '../styled/ContactUsStyled';

export const ContactUs = () => (
  <Container>
  <Title>CONTACT US</Title>
  <PersonGrid>
    <Person>
        <img src = {"/images/placeholder.png"} alt = "face1"></img>
        <p>Charles Ira</p>
        <p>charles.ira@uconn.edu</p>
        <p>Github: <a href = "https://github.com/charlesira" rel = "noreferrer" target = "_blank">charlesira</a></p>
    </Person>
    <Person>
        <img src = {"/images/placeholder.png"} alt = "face2"></img>
        <p>Georgios Karakyklas</p>
        <p>georgios.karakyklas@uconn.edu</p>
        <p>Github: <a href = "https://github.com/GeorgeKarakyklas/" rel = "noreferrer" target = "_blank">GeorgeKarakyklas</a></p>
    </Person>
    <Person>
        <img src = {"/images/placeholder.png"} alt = "face3"></img>
        <p>Robin Lopez</p>
        <p>robin.lopez@uconn.edu</p>
        <p>Github: <a href = "https://github.com/charlesira" rel = "noreferrer" target = "_blank">charlesira</a></p>
    </Person>
    <Person>
        <img src = {"/images/placeholder.png"} alt = "face4"></img>
        <p>Jason Chau</p>
        <p>jason.chau@uconn.edu</p>
        <p>Github: <a href = "https://github.com/Jason-Chau" rel = "noreferrer" target = "_blank">Jason-Chau</a></p>
    </Person>
    <Person>
        <img src = {"/images/placeholder.png"} alt = "face5"></img>
        <p>Gaurav Manandhar</p>
        <p>gaurav.manandhar@uconn.edu</p>
        <p>Github: <a href = "https://github.com/gauravm1997" rel = "noreferrer" target = "_blank">guaravm1997</a></p>
    </Person>
  </PersonGrid>
  </Container>
)