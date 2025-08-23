import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  // When fetching data this way, the user will see a loading state
  // e.g. fetch, axios, react-query
  // const [blogPosts, setBlogPosts] = useState();
  // useEffect(() => {fetchBlogData()}, []);

  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{capitalize(file.name)}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
