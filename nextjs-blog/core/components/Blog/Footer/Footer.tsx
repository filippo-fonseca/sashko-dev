import React from "react";
import styled from "styled-components";

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const Wrapper = styled.div`
    bottom: 0;
    position: absolute;

    a {
        color: rgb(84, 104, 132);
    }
`;

const Start = styled.p`
    color: rgb(84, 104, 132);
    cursor: pointer;
    transition: 0.2s ease all delay;
    font-size: 12px !important;

    :hover {
        color: #f5f5f5;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Start>© Sashko Stubailo 2021</Start>
        </Wrapper>
    );
};

export default Footer;
