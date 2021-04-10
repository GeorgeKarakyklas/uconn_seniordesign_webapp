import React from 'react';
import { Image, Container, Title, ImageGrid, Contact, ContactWrapper } from '../styled/ContactUsStyled';
import charlie from "../images/charlie.jpg";
import gorg from "../images/gorg.png";
import robin from "../images/robin.jpeg";
import jason from "../images/jason.png";
import gaurav from "../images/gaurav.jpg";

export const ContactUs = () => (
  <Container>
    <Title>CONTACT US</Title>
    <ImageGrid>
        <ContactWrapper>
            <Image>
                <img src = {charlie} alt = "face1"></img>
            </Image>
            <Contact>
                <h4>Charles Ira</h4>
                <p>charles.ira@uconn.edu</p>
                <p>Github: <a href = "https://github.com/charlesira" rel = "noreferrer" target = "_blank">charlesira</a></p>
            </Contact>
        </ContactWrapper>
        <ContactWrapper>
            <Image>
                <img src = {gorg} alt = "face2" class="image" width="200" height="200"></img>
            </Image>
            <Contact>
                <h4>Georgios Karakyklas</h4>
                <p>georgios.karakyklas@uconn.edu</p>
                <p>Github: <a href = "https://github.com/GeorgeKarakyklas/" rel = "noreferrer" target = "_blank">GeorgeKarakyklas</a></p>
            </Contact>
        </ContactWrapper>
        <ContactWrapper>
            <Image>
                <img src = {robin} alt = "face3"></img>
            </Image>
            <Contact>
                <h4>Robin Lopez</h4>
                <p>robin.lopez@uconn.edu</p>
                <p>Github: <a href = "https://github.com/robinlopez99" rel = "noreferrer" target = "_blank">robinlopez99</a></p>
            </Contact>
        </ContactWrapper>
        <ContactWrapper>
            <Image>
                <img src = {jason} alt = "face4"></img>
            </Image>
            <Contact>
                <h4>  Jason Chau</h4>
                <p>  jason.chau@uconn.edu</p>
                <p>  Github: <a href = "https://github.com/Jason-Chau" rel = "noreferrer" target = "_blank">Jason-Chau</a></p>
            </Contact>
        </ContactWrapper>
        <ContactWrapper>
            <Image>
                <img src = {gaurav} alt = "face5"></img>
            </Image>
            <Contact>
                <h4>Gaurav Manandhar</h4>
                <p>gaurav.manandhar@uconn.edu</p>
                <p>Github: <a href = "https://github.com/gauravm1997" rel = "noreferrer" target = "_blank">gauravm1997</a></p>
            </Contact>
        </ContactWrapper>
    </ImageGrid>
  </Container>
)