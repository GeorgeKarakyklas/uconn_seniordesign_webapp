import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
`;

export const Title = styled.h2`
    margin-top: 1em;
    margin-bottom: 2em;
    text-align: center;
`;

export const ImageCombination = styled.div`
    display: grid;
    grid-gap: 30px;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
`;

export const CenteredImage = styled.image`
    margin: auto;
`