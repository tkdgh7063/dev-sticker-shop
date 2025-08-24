import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface BlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: BlogPostProps) {
  return (
    <Layout title="Blog Post">
      <div>{children}</div>
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
      }
      body
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
