import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout title="404 not found, you're Lost!">
      <p>Go Home</p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="404 Not Found" />;
