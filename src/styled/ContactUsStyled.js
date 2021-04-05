import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
`;

export const Title = styled.h2`
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
    color: #000E2F;
`;

export const PersonGrid = styled.div`
    display: grid;
    grid-gap: 20px;
    margin: auto;
    grid-template-columns: repeat(5, 1fr);
`;

export const Person = styled.div`
    margin: auto;
`