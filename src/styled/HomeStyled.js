import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-top: 8em;
    grid-template-columns: repeat(4, 1fr);
`;
