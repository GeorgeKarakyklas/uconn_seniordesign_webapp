import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
`;

export const Title = styled.h2`
    margin-top: 1.5em;
    margin-bottom: 1em;
    text-align: center;
    color: #000E2F;
`;

export const ImageGrid = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    grid-gap: 20px;
    margin: auto;
    grid-template-columns: repeat(5, 1fr);
`;

export const Image = styled.div`
    margin: auto;
    border-style: solid;
    border-color: #000E2F;
    border-width: 1.5em;
`;

export const Contact = styled.div`
    text-align: center;
    margin-top: 0.5em;
`;

export const ContactWrapper = styled.div`
    border: 1px solid #eaebef;
    margin: 0;
    padding: 0;
`;