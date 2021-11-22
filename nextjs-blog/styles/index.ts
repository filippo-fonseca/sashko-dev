import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("/background.png"); */

    background-color: #060606;
    background-size: cover;

    @media (max-width: 1124px) {
        .left {
            display: none;
        }

        .cards {
            flex-direction: column;
        }
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;

    svg {
        :hover {
            cursor: pointer;
            opacity: 1 !important;
            transition: 0.5s delay;
        }
    }
`;
