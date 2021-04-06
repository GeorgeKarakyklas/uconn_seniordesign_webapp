import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
    font-size: calc(10px + 2vmin);
    text-align: center;
`;

export const Title = styled.h2`
    margin-top: 1em;
    margin-bottom: 2em;
    text-align: center;
`;

export const ImageCombination = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    grid-gap: 30px;
    margin: auto;
    font-size: calc(30px + 2vmin);
`;

export const CenteredImage = styled.image`
    margin: auto;
`