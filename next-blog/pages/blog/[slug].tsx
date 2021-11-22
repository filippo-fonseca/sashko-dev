import { BlogHeader } from '../../components/BlogHeader';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { getAllItems, getItemBySlug } from '../../lib/blog';
import { TextWrapper } from '.';
import { Markdown } from '../../components/Markdown';

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
      router.push('/404');
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  const keywords = post.keywords?.split(', ') ?? [];
  return (
    <>
      {/* <Seo
        title={`${post.title} | Filippo Fonseca`}
        description={post.intro ?? undefined}
        keywords={['blog', 'blog filippo fonseca', ...keywords]}
        url={`https://caspertheghost.me/blog/${post.slug}`}
      /> */}
      <Head>
        <link
          rel='preload'
          href='/fonts/CascadiaMono.woff2'
          as='font'
          type='font/woff2'
        />

        {/* why not "author": https://github.com/postlight/mercury-parser/blob/HEAD/src/extractors/generic/author/constants.js#L5 */}
        <meta name='authors' content='Casper Iversen' />
        <meta name='created' content={post.createdAt} />
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0',
            maxWidth: '70%',
            width: '100%',
            paddingTop: '2rem',
          }}
        >
          <TextWrapper style={{ fontWeight: 600 }}>Filippo Fonseca</TextWrapper>
          <TextWrapper target='_blank' href='/'>
            Back to home
          </TextWrapper>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <div
          style={{
            color: '#e4e4e4',
            maxWidth: '70%',
          }}
        >
          <BlogHeader post={post} />

          <Markdown content={post.content} />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllItems<Post>('posts', ['slug']);

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug.toString();

  const post = await getItemBySlug<Post>(slug, 'posts', [
    'content',
    'createdAt',
    'updatedAt',
    'slug',
    'title',
    'intro',
    'keywords',
    'readingTime',
  ]);

  return {
    props: {
      post: post ?? null,
    },
  };
};

export default PostPage;
