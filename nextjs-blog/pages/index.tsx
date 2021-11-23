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

interface Props {
    posts: Post[];
}

export const TextWrapper = styled.a`
    color: #f5f5f5;
    margin-bottom: 0;

    :hover {
        text-decoration: underline;
        color: rgb(84, 104, 132);
    }
`;

const BlogPage = ({ posts }: Props) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Seo
                title="All posts"
                url="https://sashko.dev"
                keywords={["blog sashko stubailo", "sashko stubailo blog"]}
                description="My thoughts on the world - engineering, entrepreneurship, productivity, personal development, tech, and much more - Filippo Fonseca."
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
                        paddingTop: "2rem",
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
                                    href="https://github.com/stubailo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginRight: "0.375rem" }}
                                >
                                    <LinkedInIcon />
                                </a>
                                <a
                                    href="https://github.com/stubailo"
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
                            {posts.map(post => {
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
                                        href={`/blog/${post.slug}`}
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
                                                            src="https://sashko.dev/static/f685a542f579a4f9a2a0eb05f7b60fcc/8ba1e/autocode.png"
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
                            <Credits />
                        </div>
                    </Home>
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
