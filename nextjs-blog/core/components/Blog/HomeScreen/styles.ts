import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2.25rem 1.125rem;
    color: hsla(0, 0%, 0%, 0.8);

    h1 {
        font-family: "Merriweather", serif;
        font-weight: 700;
        font-kerning: normal;
        font-size: 27px;
    }

    p {
        font-size: 18px;
    }
`;

export const BlogCard = styled.div`
    background: transparent;
    padding: 0.75rem;
    height: fit-content;
    width: fit-content;
    border-radius: 5px;

    h2 {
        font-weight: 700;
        color: #404eb3;
        font-family: "Merriweather", serif;

        margin-top: 1.125rem;
        margin-bottom: 0.375rem;
        font-size: 21px;
        line-height: 1.5rem;
    }

    p {
        margin-top: 0;
    }
`;
