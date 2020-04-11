import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import External from "./../../content/assets/external";
import { externalPost } from "../components/external";
import "./index.css";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { github, twitter, linkedin } = data.site.siteMetadata.social;
  let posts = data.allMarkdownRemark.edges
    .map(({ node }) => ({
      url: node.fields.slug,
      title: node.frontmatter.title,
      desc: node.frontmatter.description,
      date: node.frontmatter.date,
      imgUrl:
        node.frontmatter.imgUrl &&
        node.frontmatter.imgUrl.childImageSharp.fixed.srcSet,
      publish: node.frontmatter.publish
    }))
    .filter(node => node.publish);

  posts = [...posts, ...externalPost].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Layout
      location={location}
      title={siteTitle}
      twitter={twitter}
      github={github}
      linkedin={linkedin}
    >
      <SEO title="All posts" />
      {posts.map(node => {
        const title = node.title;
        return (
          <article key={node.url}>
            <header className={"post-header"}>
              {node.external ? (
                <a
                  href={node.url}
                  className={"link-img"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img srcSet={node.imgUrl} className={"post-img"} alt="" />{" "}
                </a>
              ) : (
                <Link className={"link-img"} to={node.url}>
                  <img srcSet={node.imgUrl} className={"post-img"} alt="" />
                </Link>
              )}

              <div style={{}} className={"post-data"}>
                <small>{node.date}</small>
                <h3 className={"list-h3"}>
                  {node.external ? (
                    <a
                      href={node.url}
                      className={"font-val"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      {title} <External width="18px" />
                    </a>
                  ) : (
                    <Link className={"font-val"} to={node.url}>
                      {title}
                    </Link>
                  )}
                </h3>
                <p
                  className={"desc"}
                  dangerouslySetInnerHTML={{
                    __html: node.desc
                  }}
                />
              </div>
            </header>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
          linkedin
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            publish
            imgUrl {
              childImageSharp {
                fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
