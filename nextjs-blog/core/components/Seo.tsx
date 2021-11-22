import * as React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

// these should be displayed on all pages.
const DEFAULT_KEYWORDS = [
  "dev-caspertheghost",
  "casper iversen",
  "ghostybot",
  "snaily cad",
  "belgium",
];

const defaults: Props = {
  title: "Casper Iversen - Web Developer",
  url: "https://caspertheghost.me",
  description: "Hi I'm Casper Iversen! A Frontend Web Developer.",
  keywords: [],
};

export const Seo = (props: Props) => {
  const tags = {
    ...defaults,
    ...props,
  };

  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="twitter:title" content={tags.title} />
      <meta property="og:site_name" content={tags.title} />
      <meta property="og:title" content={tags.title} />

      <meta name="description" content={tags.description} />
      <meta property="og:description" content={tags.description} />
      <meta name="twitter:description" content={tags.description} />

      <link rel="canonical" href={tags.url} />
      <meta property="og:url" content={tags.url} />

      <meta name="keywords" content={[...DEFAULT_KEYWORDS, ...tags.keywords].join(", ")} />
    </Head>
  );
};
