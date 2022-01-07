import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const Wrapper = styled.div`
    bottom: 0;

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
    const year = new Date().getFullYear();

    return (
        <Wrapper>
            <Start>© Sashko Stubailo {year}</Start>
        </Wrapper>
    );
};

export default Footer;
