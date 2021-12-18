import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import { Post } from "./[slug]";
// import styles from "css/blog.module.scss";
import { Seo } from "../core/components/Seo";
import { getAllItems } from "../core/lib/blog";
import Home from "../core/components/Blog/HomeScreen";
import { BlogCard } from "../core/components/Blog/HomeScreen/styles";
import Credits from "../core/components/Blog/Credits";
import styled from "styled-components";
import Head from "next/head";
import { formatDistanceToNow } from "date-fns";
import dayjs from "dayjs";
import GithubIcon from "../core/icons/GitHub";
import LinkedInIcon from "../core/icons/LinkedInIcon";
import TwitterIcon from "../core/icons/TwitterIcon";
import { matchThumbnailToPost } from "../core/lib/matchThumbnailToPost";

interface Props {
    posts: Post[];
}

export const TextWrapper = styled.a`
    margin-bottom: 0;
    color: #404eb3;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;

    :hover {
        cursor: pointer;
    }
`;

const BlogPage = ({ posts }: Props) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Seo
                title="Sashko Stubailo | All Posts"
                url="https://sashko.dev"
                keywords={["blog sashko stubailo", "sashko stubailo blog"]}
                description="Engineering manager at Stripe. Previously, open source eng manager at
                Apollo GraphQL and Meteor."
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0",
                        maxWidth: "42rem",
                        width: "100%",
                        flexDirection: "column",
                    }}
                >
                    <Home>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "0.75rem" }}>
                                <h1
                                    style={{
                                        marginTop: "0",
                                        lineHeight: "2.25rem",
                                        marginBottom: 0,
                                    }}
                                >
                                    Sashko Stubailo
                                </h1>
                            </div>
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
                        <p style={{ marginTop: 0 }}>
                            Engineering manager at Stripe. Previously, open
                            source eng manager at Apollo GraphQL and Meteor.
                        </p>

                        <div className={""}>
                            {posts.map((post, idx) => {
                                const date = new Date(
                                    post.updatedAt ?? post.createdAt
                                );

                                const published =
                                    dayjs(date).format("MM/DD/YYYY");

                                const updatedAtFull =
                                    post.updatedAt &&
                                    formatDistanceToNow(
                                        new Date(post.updatedAt)
                                    );
                                return (
                                    <Link
                                        href={`/${post.slug}`}
                                        key={post.slug}
                                    >
                                        <a
                                            href={`/blog/${post.slug}`}
                                            className={""}
                                        >
                                            <BlogCard>
                                                <div
                                                    style={{ display: "flex" }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                            marginRight:
                                                                "1.5rem",
                                                        }}
                                                    >
                                                        <img
                                                            src={matchThumbnailToPost(
                                                                post.title
                                                            )}
                                                            height="108"
                                                            width="108"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h2>{post.title}</h2>
                                                        <p>
                                                            {published} •{" "}
                                                            {post.intro}
                                                        </p>
                                                    </div>
                                                </div>
                                            </BlogCard>
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                        <Credits />                    </Home>
                </div>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllItems<Post>("posts", [
        "slug",
        "title",
        "createdAt",
        "intro",
    ]);

    return {
        props: {
            posts,
        },
    };
};

export default BlogPage;
