import React from "react";

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  return <title>{title} - DevSticker</title>;
}
