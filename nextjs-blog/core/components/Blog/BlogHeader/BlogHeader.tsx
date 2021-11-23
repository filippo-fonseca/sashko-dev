import * as React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import styled from "styled-components";
import GithubIcon from "../../../icons/GitHub";
import LinkedInIcon from "../../../icons/LinkedInIcon";
import TwitterIcon from "../../../icons/TwitterIcon";
import dayjs from "dayjs";

interface Props {
    post: any;
}

const Title = styled.h1`
    margin-bottom: 0;
`;

const Description = styled.p`
    font-size: 25px !important;
    line-height: 2.25rem;
    margin: 0 0 27px !important;
`;

const AuthorBubble = styled.div`
    display: flex;
    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    p {
        margin: 0;
    }
`;

export const BlogHeader = ({ post }: Props) => {
    const date = new Date(post.updatedAt ?? post.createdAt);

    const published = formatDistanceToNow(date);
    const updatedAtFull =
        post.updatedAt && formatDistanceToNow(new Date(post.updatedAt));

    return (
        <header>
            <div>
                <div>
                    <Title className="art-title">{post.title}</Title>
                    <Description>Hello World</Description>
                    <AuthorBubble>
                        <img src="https://sashko.dev/static/ae916ab87b655a18fe7fc221479a0abe/99438/profile-pic.jpg" />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "0.75rem",
                            }}
                        >
                            <p>
                                Sashko Stubailo,{" "}
                                {dayjs(date).format("MM/DD/YYYY")}
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    paddingBottom: "0.25rem",
                                }}
                            >
                                <a
                                    href="https://github.com/stubailo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginRight: "0.375rem" }}
                                >
                                    <GithubIcon />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/stubailo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginRight: "0.375rem" }}
                                >
                                    <LinkedInIcon />
                                </a>
                                <a
                                    href="https://twitter.com/stubailo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginRight: "0.375rem" }}
                                >
                                    <TwitterIcon />
                                </a>
                            </div>
                        </div>
                    </AuthorBubble>
                    {/* <h2>
                        <span title={updatedAtFull}>
                            Published {published} ago{" "}
                        </span>
                        {post.updatedAt ? <span> - Updated</span> : null}
                        {post.readingTime ? (
                            <>
                                - <span>{post.readingTime}</span>
                            </>
                        ) : null}
                    </h2> */}
                </div>
            </div>
        </header>
    );
};
