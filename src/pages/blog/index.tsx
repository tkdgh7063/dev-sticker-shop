import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

function capitalize(str: string | null | undefined): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  // When fetching data this way, the user will see a loading state
  // e.g. fetch, axios, react-query
  // const [blogPosts, setBlogPosts] = useState();
  // useEffect(() => {fetchBlogData()}, []);

  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{capitalize(file.frontmatter?.title)}</h3>
              <h5>
                {file.frontmatter?.authur} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          authur
          category
          date(formatString: "YY.MM.DD")
          title
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
