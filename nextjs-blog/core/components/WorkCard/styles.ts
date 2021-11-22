import styled from "styled-components";

interface CardWrapperProps {
    left: boolean;
}

export const ATag = styled.a`
    .hover {
        cursor: pointer;
        opacity: 0.6 !important;

        transform: scale(1.05);
    }
`;

export const CardWrapper = styled.div<CardWrapperProps>`
    background: rgba(15, 17, 21, 0.5);
    border-radius: 10px;
    padding: 1.25rem;
    backdrop-filter: blur(7px);
    width: 100%;
    margin-right: ${props => (props.left ? "0.5rem" : null)};
    margin-left: ${props => (props.left ? null : "0.5rem")};
`;
