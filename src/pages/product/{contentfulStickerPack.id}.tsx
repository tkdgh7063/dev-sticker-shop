import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const pack = data.contentfulStickerPack!;
  const { name, price, preview } = pack;
  return (
    <Layout title={name!}>
      <GatsbyImage image={getImage(preview?.gatsbyImageData!)!} alt={name!} />
      <h2>${price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String!) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 450, placeholder: BLURRED)
      }
    }
  }
`;
