import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  // Unlike fetch or axios, static queries load data at build time
  // This means the data is available immediately without a loading state
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} - {data.site?.siteMetadata?.title}
    </title>
  );
}
