import styled from "styled-components";

export const Container = styled.div`
    max-width: 90vw;
    margin: 0 auto;
    font-size: calc(10px + 2vmin);
`;

export const Title = styled.h2`
    margin-top: 1.5em;
    margin-bottom: 1em;
    text-align: center;
`;

export const Subtitle = styled.h3`
    margin-top: 2em;
    margin-bottom: 1em;
    text-align: left;
    font-weight: bold;
`;

export const SectionTitle = styled.h4`
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: left;
    font-weight: bold;
`;

export const Text = styled.h5`
    text-align: left;
`
export const Code = styled.h5`
    text-indent: 1em;
`

export const TOC = styled.div
`
#toc_container {
    background: #f9f9f9 none repeat scroll 0 0;
    border: 1px solid #aaa;
    display: table;
    font-size: 75%;
    margin-bottom: 1em;
    padding: 10px;
    width: 24em;
}

.toc_title {
    font-weight: 700;
    text-align: center;
}

#toc_container li, #toc_container ul, #toc_container ul li{
    list-style: outside none none !important;
    text-align: left;
}
`;