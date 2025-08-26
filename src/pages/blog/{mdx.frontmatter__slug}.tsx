import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface BlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: BlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.image?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="Blog Post">
      <div>{children}</div>
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        slug
        date
        category
        authur
        image {
          childImageSharp {
            gatsbyImageData(height: 500, width: 350, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
