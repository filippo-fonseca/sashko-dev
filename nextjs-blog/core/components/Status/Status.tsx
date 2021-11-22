import React from "react";

const Status = () => {
    const [status, setStatus] = React.useState<boolean>(true);

    React.useEffect(() => {
        setTimeout(() => {
            setStatus(!status);
        }, 1000);
    }, [status]);

    return (
        <div
            style={{
                display: "flex",
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
                background: "rgba(15,17,21,.5)",
                borderRadius: "10px",
                padding: "1.25rem",
                backdropFilter: "blur(7px)",
            }}
        >
            <div
                style={{
                    backgroundColor: status ? "#53CC61" : null,
                    borderRadius: "50%",
                    height: "0.875rem",
                    width: "0.875rem",
                    alignSelf: "center",
                    marginRight: "1rem",
                    transition: "1.5s",
                    fontWeight: "bold",
                }}
            />
            <p style={{ fontWeight: "bold", margin: "0" }}>
                CEO @{" "}
                <a
                    href="https://zyndicate.app"
                    style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: 650,
                    }}
                >
                    Zyndicate
                </a>
            </p>
        </div>
    );
};

export default Status;
