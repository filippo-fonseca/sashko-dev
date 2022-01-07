import { BlogHeader } from "../core/components/Blog/BlogHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllItems, getItemBySlug } from "../core/lib/blog";
import { Seo } from "../core/components/Seo";
import { Markdown } from "../core/components/Markdown";
import { TextWrapper } from ".";
import styled from "styled-components";
import Footer from "../core/components/Blog/Footer";

const Wrapper = styled.div`
    padding: 2.25rem 1.125rem;
    color: hsla(0, 0%, 0%, 0.8);

    h1 {
        font-family: "Merriweather", serif;
        font-weight: 700;
        font-kerning: normal;
        font-size: 36px;
        line-height: 3rem;

        .art-title {
            margin: 0 !important;
        }
    }

    h2 {
        font-family: "Merriweather", serif;
        font-size: 27px;
    }

    h3 {
        font-family: "Merriweather", serif;
        font-size: 20px;
    }

    a {
        color: #404eb3;
    }

    p,
    li {
        font-size: 18px;
    }

    ul {
        list-style-position: inside;
        padding-left: 0;
    }

    li {
        list-style: disc;
    }
`;

export interface Post {
    title: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    slug: string | null;
    content: string | null;
    intro: string | null;
    keywords: string | null;
    readingTime: number;
    frontmatter: {
        [key: string]: any;
    };
}

interface Props {
    post: Post;
}

const PostPage = ({ post }: Props) => {
    const router = useRouter();

    React.useEffect(() => {
        if (!post) {
            router.push("/404");
        }
    }, [post, router]);

    if (!post) {
        return null;
    }

    const keywords = post.keywords?.split(", ") ?? [];
    return (
        <>
            <Seo
                title={`${post.title}`}
                description={post.intro ?? undefined}
                keywords={["blog", "blog sashko stubailo", ...keywords]}
                url={`https://sashko.dev/${post.slug}`}
            />
            <Head>
                <link
                    rel="preload"
                    href="/fonts/CascadiaMono.woff2"
                    as="font"
                    type="font/woff2"
                />

                {/* why not "author": https://github.com/postlight/mercury-parser/blob/HEAD/src/extractors/generic/author/constants.js#L5 */}
                <meta name="authors" content="Sashko Stubailo" />
                <meta name="created" content={post.createdAt} />
            </Head>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                }}
            >
                <Wrapper
                    style={{
                        maxWidth: "42rem",
                    }}
                >
                    <TextWrapper href="/">All posts</TextWrapper>
                    <BlogHeader post={post} />

                    <Markdown content={post.content} />
                    <Footer />
                </Wrapper>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllItems<Post>("posts", ["slug"]);

    return {
        fallback: false,
        paths: posts.map(post => ({
            params: {
                slug: post.slug,
            },
        })),
    };
};

export const getStaticProps: GetStaticProps = async ctx => {
    const slug = ctx.params.slug.toString();

    const post = await getItemBySlug<Post>(slug, "posts", [
        "content",
        "createdAt",
        "updatedAt",
        "slug",
        "title",
        "intro",
        "keywords",
        "readingTime",
    ]);

    return {
        props: {
            post: post ?? null,
        },
    };
};

export default PostPage;
