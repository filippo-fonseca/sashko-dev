import { GetStaticProps } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { Post } from './[slug]';
// import styles from "css/blog.module.scss";
// import { Seo } from "../../core/components/Seo";
import { getAllItems } from '../../lib/blog';
import Home from '../../components/HomeScreen';
import { BlogCard } from '../../components/HomeScreen/styles';
import Credits from '../../components/Credits';
import styled from 'styled-components';

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
      {/* <Seo
                title="Blog | Filippo Fonseca"
                url="https://filippofonseca.me/blog"
                keywords={["blog filippo fonseca", "filippo fonseca blog"]}
                description="My thoughts on the world - engineering, entrepreneurship, productivity, personal development, tech, and much more - Filippo Fonseca."
            /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '2rem',
          margin: '0',
        }}
      >
        <TextWrapper style={{ fontWeight: 600 }}>Filippo Fonseca</TextWrapper>
        <TextWrapper target='_blank' href='/'>
          Back to home
        </TextWrapper>
      </div>
      <Home>
        <h1 style={{ marginTop: '0' }}>⚡ Blog posts</h1>
        <p style={{ maxWidth: '50rem', color: 'rgb(84, 104, 132)' }}>
          Hey there! Welcome to my blog. Here you'll find my thoughts on the
          world and its many wonders - engineering, entrepreneurship,
          productivity, personal development, tech, and much more.
        </p>

        <div className={''}>
          {posts.map((post) => {
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <a href={`/blog/${post.slug}`} className={''}>
                  <BlogCard>
                    <h2>{post.title}</h2>

                    <p>{post.intro}</p>
                  </BlogCard>
                </a>
              </Link>
            );
          })}
        </div>
      </Home>
      <Credits />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllItems<Post>('posts', [
    'slug',
    'title',
    'createdAt',
    'intro',
  ]);

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
