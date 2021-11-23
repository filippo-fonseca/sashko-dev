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
                title="Blog | Filippo Fonseca"
                url="https://filippofonseca.me/blog"
                keywords={["blog filippo fonseca", "filippo fonseca blog"]}
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
                        <h1
                            style={{
                                marginTop: "0",
                                lineHeight: "2.25rem",
                                marginBottom: 0,
                            }}
                        >
                            Sashko Stubailo
                        </h1>
                        <p style={{ marginTop: 0 }}>
                            Engineering manager at Stripe. Previously, open
                            source eng manager at Apollo GraphQL and Meteor.
                        </p>

                        <div className={""}>
                            {posts.map(post => {
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
                                                            height: "6rem",
                                                            width: "6rem",
                                                            marginRight:
                                                                "1.5rem",
                                                        }}
                                                    >
                                                        <img
                                                            src="https://sashko.dev/static/f685a542f579a4f9a2a0eb05f7b60fcc/8ba1e/autocode.png"
                                                            height="100%"
                                                            width="100%"
                                                            style={{
                                                                alignSelf:
                                                                    "center",
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h2>{post.title}</h2>
                                                        <p>{post.intro}</p>
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
