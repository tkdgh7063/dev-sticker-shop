import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  // When fetching data this way, the user will see a loading state
  // e.g. fetch, axios, react-query
  // const [blogPosts, setBlogPosts] = useState();
  // useEffect(() => {fetchBlogData()}, []);

  return (
    <Layout title="Blog">
      <p>The latest updates from our creative sticker store.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
