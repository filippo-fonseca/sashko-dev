import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#060606",
    color: "#f5f5f5",
    border: "2px solid rgb(84, 104, 132)"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.75)"
  }
};

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
