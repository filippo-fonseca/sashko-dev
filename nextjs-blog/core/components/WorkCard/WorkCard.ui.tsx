import Image from "next/image";
import React from "react";
import { ATag, CardWrapper } from "./styles";

interface IWorkCard {
    companyName: string;
    src: string;
    category: string;
    position: string;
    description: string;
    left?: boolean;
    url: string;
    active?: boolean;
}

const WorkCard: React.FC<IWorkCard> = props => {
    const [status, setStatus] = React.useState<boolean>(true);

    React.useEffect(() => {
        setTimeout(() => {
            setStatus(!status);
        }, 1000);
    }, [status]);

    return (
        <ATag target="_blank" href={props.url} rel="noreferrer">
            <CardWrapper left={props.left}>
                <div style={{ display: "flex" }}>
                    <img src={props.src} height="40" width="40" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "1rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    margin: "0",
                                    fontSize: "1.2rem",
                                }}
                            >
                                {props.companyName}
                            </p>

                            <a
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: props.active
                                        ? "1px solid #0ed880"
                                        : null,
                                    color: "#0ed880",
                                    backgroundColor: props.active
                                        ? "#0ddb852e"
                                        : null,
                                    padding: "0 7px",
                                    borderRadius: "2em",
                                    fontSize: "12px",
                                    fontWeight: 500,
                                    lineHeight: "18px",
                                    marginLeft: "5.5rem",
                                }}
                            >
                                {props.active ? "Active" : null}
                            </a>
                        </div>
                        <p
                            style={{
                                margin: "0.2rem 0 0 0",
                                color: "rgb(204, 204, 204)",
                                fontSize: "0.875rem",
                            }}
                        >
                            {props.category}
                        </p>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4 style={{ marginBottom: "0" }}>Role</h4>
                    <p style={{ margin: "0.2rem 0 0 0" }}>{props.position}</p>
                    <h4 style={{ marginBottom: "0" }}>Description</h4>
                    <p style={{ margin: "0.2rem 0 0 0" }}>
                        {props.description}
                    </p>
                </div>
            </CardWrapper>
        </ATag>
    );
};

export default WorkCard;
