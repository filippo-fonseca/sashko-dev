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
        border: "2px solid rgb(84, 104, 132)",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.75)",
    },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const Wrapper = styled.div`
    bottom: 0;
    position: absolute;
    padding-left: 2rem;
    padding-bottom: 2rem;

    a {
        color: rgb(84, 104, 132);
    }
`;

const Start = styled.p`
    color: rgb(84, 104, 132);
    cursor: pointer;
    transition: 0.2s ease all delay;
    font-size: 1rem;

    :hover {
        color: #f5f5f5;
    }
`;

const Credits = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Wrapper>
            <Start onClick={() => openModal()}>Credits</Start>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Credits Modal"
            >
                <p style={{ fontSize: "0.875rem" }}>
                    💙 The setup for this blog on a technical end was inspired
                    by my good friend{" "}
                    <a
                        style={{ textDecoration: "underline" }}
                        target="_blank"
                        href="https://caspertheghost.me"
                    >
                        Casper Iversen.
                    </a>{" "}
                    Check him out!
                </p>
            </Modal>
        </Wrapper>
    );
};

export default Credits;
