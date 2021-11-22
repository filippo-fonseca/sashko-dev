import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 2rem 2rem 2rem;
    color: #f5f5f5;
`;

export const BlogCard = styled.div`
    background: transparent;
    border: 2px solid #f40076;
    padding: 0.75rem;
    height: fit-content;
    width: fit-content;
    border-radius: 5px;

    h2 {
        font-size: 0.95rem;
    }

    p {
        font-size: 0.95rem;
    }

    :hover {
        h2 {
            text-decoration: underline;
        }
    }
`;
